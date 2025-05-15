import { ReactNode } from "react";

import AdminNavbar from "@/components/modules/dashboard/AdminNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col h-full w-full overflow-hidden">
        <AdminNavbar />
        <div className="grow overflow-auto px-4 py-4">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
