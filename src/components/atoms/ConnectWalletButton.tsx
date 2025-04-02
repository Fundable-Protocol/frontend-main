"use client";

import { Loader2 } from "lucide-react";

import { Button } from "../ui/button";
import walletEntity from "@/store/walletEntity";

import { useConnectWallet } from "../../hooks/useConnectWallet";
import { useMount } from "@/hooks/useMount";

interface ConnectWalletBtnProps {
  onClick?: () => void;
  type?: "mobile" | "desktop";
}

const ConnectWalletButton = ({
  type = "mobile",
  onClick,
}: ConnectWalletBtnProps) => {
  const mounted = useMount();
  const { connectWallet, disConnectWallet } = useConnectWallet();
  const { isConnected } = walletEntity.get();

  const handleConnectWallet = () => {
    onClick?.();

    if (!isConnected) {
      connectWallet();
    }

    if (isConnected) {
      disConnectWallet();
    }
  };

  {
    /* {`${address?.slice(0, 6)}...${address?.slice(-4)}`} */
  }

  return !mounted ? (
    <Button
      variant="gradient"
      className={type === "mobile" ? "text-xl py-4" : ""}
      size={type === "mobile" ? "md" : "default"}
      disabled={!mounted}
    >
      <Loader2 />
      <span>Please wait</span>
    </Button>
  ) : (
    <Button
      variant="gradient"
      className={type === "mobile" ? "text-xl py-4" : ""}
      size={type === "mobile" ? "md" : "default"}
      onClick={handleConnectWallet}
    >
      {!isConnected ? "Connect Wallet" : "Launch App"}
    </Button>
  );
};

export default ConnectWalletButton;
