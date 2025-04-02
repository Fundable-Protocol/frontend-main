import { setWalletEntity } from "@/store/walletEntity";
import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
} from "@starknet-react/core";

import { StarknetkitConnector, useStarknetkitConnectModal } from "starknetkit";

export function useConnectWallet() {
  const { disconnect } = useDisconnect();

  const { connectAsync, connectors } = useConnect();

  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors: connectors as StarknetkitConnector[],
  });

  async function connectWallet() {
    try {
      const { connector } = await starknetkitConnectModal();

      setWalletEntity({ isConnecting: true });

      if (!connector) {
        setWalletEntity({
          isConnecting: false,
          isConnected: false,
          address: "",
        });

        return;
      }

      await connectAsync({ connector: connector as Connector });

      setWalletEntity({
        isConnecting: false,
        isConnected: true,
        address,
      });
    } catch {}
  }

  async function disConnectWallet() {
    disconnect();

    setWalletEntity({
      isConnecting: false,
      isConnected: false,
      address: "",
    });
  }

  //  address: `${address?.slice(0, 6)}...${address?.slice(-4)}`,

  const { address } = useAccount();

  return {
    disConnectWallet,
    connectWallet,
  };
}
