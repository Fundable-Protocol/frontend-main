import { useState, useEffect } from "react";

import { setWallet } from "@/store/walletEntity";
import SecureLS from "secure-ls";

export function useMount(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const ls = new SecureLS({ encodingType: "aes" });

    const walletData = ls.get("aktInfo");

    if (!walletData?.isPrevConnected) {
      // remove cookies and delete data
    } else {
      setWallet({
        isConnected: walletData?.isPrevConnected ?? false,
        address: walletData?.address ?? "",
      });
    }
  }, []);

  return mounted;
}
