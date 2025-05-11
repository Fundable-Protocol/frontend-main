"use client";

import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { Button } from "../ui/button";
import walletEntity from "@/store/walletEntity";

import { useConnectWallet } from "../../hooks/useConnectWallet";
import { useMount } from "@/hooks/useMount";
import { cn } from "@/lib/utils";

interface ConnectWalletBtnProps {
  onClick?: () => void;
  type?: "mobile" | "desktop";
}

const ConnectWalletButton = ({
  type = "mobile",
  onClick,
}: ConnectWalletBtnProps) => {
  const mounted = useMount();
  const router = useRouter();

  const { connectWallet, disConnectWallet, address } = useConnectWallet();
  const { isConnected } = walletEntity.get();

  const handleConnectWallet = () => {
    onClick?.();

    if (address) {
      router.push("/admin");
    }

    if (!isConnected) {
      connectWallet().then(() => {
        router.push("/admin");
      });
    }

    if (isConnected) disConnectWallet();
  };

  return (
    <div className="btn-wrapper">
      <span className={cn("btn-grad", !mounted ? "hidden" : "")} />
      <Button
        variant="gradient"
        className={type === "mobile" ? "text-base py-4" : ""}
        size={type === "mobile" ? "md" : "default"}
        onClick={handleConnectWallet}
        disabled={!mounted}
      >
        {!mounted ? <Loader2 /> : null}
        Launch App
      </Button>
    </div>
  );
};

export default ConnectWalletButton;
