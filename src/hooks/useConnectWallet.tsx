import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";
import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
} from "@starknet-react/core";
import SecureLS from "secure-ls";
import { setWallet } from "@/store/walletEntity";
import { useEffect, useCallback, useRef } from "react";

export function useConnectWallet() {
  const { disconnect } = useDisconnect();
  const { connectAsync, connectors, isSuccess } = useConnect();
  const { address } = useAccount();

  // Store connectors in a ref to avoid re-renders when accessing them
  const connectorsRef = useRef(connectors);

  // Use refs to store memoized functions
  const lsRef = useRef(
    typeof window !== "undefined" ? new SecureLS({ encodingType: "aes" }) : null
  );

  // Move the success handler to useEffect to avoid re-renders
  useEffect(() => {
    if (isSuccess && address) {
      setWallet({
        isConnected: true,
        address,
      });

      lsRef.current?.set("aktInfo", { isPrevConnected: true, address });
    }
  }, [isSuccess, address]);

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
    modalTheme: "dark",
  });

  // Use useCallback to memoize functions
  const connectWallet = useCallback(async () => {
    try {
      const { connector } = await starknetkitConnectModal();

      if (!connector) {
        setWallet({
          isConnected: false,
          address: "",
        });

        return;
      }

      console.log("connector:::::", typeof connector?.wallet);

      await connectAsync({ connector: connector as Connector });
    } catch (err) {
      console.log("ERRRRR::::", err);
    }
  }, [starknetkitConnectModal, connectAsync]);

  const disConnectWallet = useCallback(() => {
    disconnect();

    setWallet({
      isConnected: false,
      address: "",
    });

    lsRef.current?.remove("aktInfo");
  }, [disconnect]);

  return {
    address,
    disConnectWallet,
    connectWallet,
    isConnected: Boolean(address && isSuccess),
    connectors: connectorsRef.current,
  };
}
