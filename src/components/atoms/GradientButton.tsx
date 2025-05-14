import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useMount } from "@/hooks/useMount";

export interface ConnectWalletBtnProps {
  onClick?: () => void;
  type?: "mobile" | "desktop";
  title?: string;
}

const GradientButton = ({
  title = "Launch App",
  type = "desktop",
  onClick,
}: ConnectWalletBtnProps) => {
  const mounted = useMount();

  return (
    <div className="btn-wrapper">
      <span className={cn("btn-grad", !mounted ? "hidden" : "")} />
      <Button
        variant="gradient"
        className={type === "mobile" ? "text-base py-4" : ""}
        size={type === "mobile" ? "md" : "default"}
        onClick={onClick}
        disabled={!mounted}
      >
        {!mounted ? <Loader2 /> : null}
        {title}
      </Button>
    </div>
  );
};

export default GradientButton;
