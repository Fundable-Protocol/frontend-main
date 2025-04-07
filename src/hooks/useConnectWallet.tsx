import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";

import Cookies from "js-cookie";

import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
} from "@starknet-react/core";

import SecureLS from "secure-ls";

import { setWallet } from "@/store/walletEntity";

export function useConnectWallet() {
  const { disconnect } = useDisconnect();

  // Initialize SecureLS only on the client side.
  const ls =
    typeof window !== "undefined"
      ? new SecureLS({ encodingType: "aes" })
      : null;

  const { connectAsync, connectors, isSuccess } = useConnect();

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });

  async function connectWallet() {
    try {
      const { connector } = await starknetkitConnectModal();

      if (!connector) {
        setWallet({
          isConnected: false,
          address: "",
        });

        Cookies.remove("isPrevConnected");

        return;
      }

      await connectAsync({ connector: connector as Connector });
    } catch {}
  }

  async function disConnectWallet() {
    disconnect();

    setWallet({
      isConnected: false,
      address: "",
    });

    Cookies.remove("isPrevConnected");

    ls?.remove("aktInfo");
  }

  const { address } = useAccount();

  if (isSuccess) {
    setWallet({
      isConnected: true,
      address,
    });

    ls?.set("aktInfo", { isPrevConnected: true, address });

    Cookies.set("isPrevConnected", "true", {
      path: "/",
    });
  }

  return { address, disConnectWallet, connectWallet };
}
