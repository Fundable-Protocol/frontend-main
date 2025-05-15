"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import NotificationIcon from "@/components/svgs/NotificationIcon";
import { SidebarTrigger } from "@/components/ui/sidebar";
import AvaTar from "../../../../public/svgs/avatar.svg";
import ConnectStarknetkitModal from "@/components/atoms/ConnectStarknetkitModal";
import { useConnectWallet } from "@/hooks/useConnectWallet";
import { sliceAddress } from "@/lib/utils";

const AdminNavbar = () => {
  const pathname = usePathname();
  const { address } = useConnectWallet();

  const currentPath = pathname?.slice(1);

  const connectAddress = address
    ? sliceAddress(address as string)
    : "Connecting";

  return (
    <nav className="py-3 px-3 md:px-5 flex justify-between items-center border-b border-b-fundable-mid-dark text-white">
      <span className="flex items-center gap-x-2">
        <SidebarTrigger />
        <h2 className="font-medium md:text-2xl font-bricolage capitalize">
          {currentPath}
        </h2>
      </span>
      <div className="flex items-center gap-x-4">
        <span className="size-12 hidden md:grid place-content-center rounded-full bg-fundable-mid-dark">
          <NotificationIcon />
        </span>

        {address ? (
          <div className="bg-gradient-to-r from-blue-500 via-purple-800 to-pink-500 rounded-sm px-2 md:px-3 py-1 md:py-2 text-sm font-medium flex gap-x-2 font-bricolage">
            <Image
              src={AvaTar}
              alt="Avatar"
              width={50}
              height={50}
              className="w-auto"
              priority
            />
            {connectAddress}
          </div>
        ) : (
          <ConnectStarknetkitModal />
        )}
      </div>
    </nav>
  );
};

export default AdminNavbar;
