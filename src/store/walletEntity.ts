// store/wallet.ts
import { entity, persistence } from "simpler-state";

// import Cookies from "js-cookie";

export interface WalletEntityProps {
  address?: string | null;
  isConnecting?: boolean;
  isConnected?: boolean;
}

const walletEntity = entity<WalletEntityProps>(
  {
    address: "",
    isConnected: false,
    isConnecting: false,
  },
  [persistence("wallet", { storage: "local" })]
);

export const setWalletEntity = ({
  address,
  isConnected,
  isConnecting,
}: WalletEntityProps) => {
  walletEntity.set({ address, isConnected, isConnecting });

  // Cookies.set("walletConnected", isConnected ? "true" : "false", {
  //   expires: 7,
  //   path: "/",
  // });
};

export const disconnectWallet = () => {
  walletEntity.set({ address: "", isConnected: false });

  // Cookies.remove("walletConnected");

  // localStorage.removeItem("wallet");
};

export default walletEntity;
