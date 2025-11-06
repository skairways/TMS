import { AppSidebar } from "@/shared/ui";
import { SidebarProvider, SidebarTrigger } from "@/shared/ui/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};
