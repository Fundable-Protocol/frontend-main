import { Button } from "../ui/button";

// This component is a button that allows users to connect their wallets.

interface ConnectWalletBtnProps {
  onClick?: () => void;
  type?: "mobile" | "desktop";
}

const ConnectWalletButton = ({
  type = "mobile",
  onClick,
}: ConnectWalletBtnProps) => {
  const handleConnectWallet = () => {
    // Implement wallet connection logic here

    onClick?.();
    console.log("Connect Wallet button clicked");
  };

  return (
    <Button
      variant="gradient"
      className={type === "mobile" ? "text-xl py-4" : ""}
      size={type === "mobile" ? "md" : "default"}
      onClick={handleConnectWallet}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
