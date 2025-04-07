import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/organisms/AppSidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-dvh w-full flex">
        <SidebarTrigger className="text-white lg:hidden" />
        <div className="bg-[#0D0D0D] w-full">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
