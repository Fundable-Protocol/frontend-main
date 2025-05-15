import NotificationIcon from "@/components/svgs/NotificationIcon";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

const NavBarSkeleton = () => {
  return (
    <nav className="p-5 flex justify-between items-center border-b border-b-fundable-mid-dark">
      <div className="flex items-center gap-x-2">
        <SidebarTrigger />
        <Skeleton className="h-10 w-32 bg-[#36393a]" />
      </div>
      <div className="flex items-center gap-x-2">
        <span className="size-12 grid place-content-center rounded-full bg-[#151718]">
          <NotificationIcon />
        </span>

        <Skeleton className="h-10 w-28 bg-[#36393a]" />
      </div>
    </nav>
  );
};

export default NavBarSkeleton;
