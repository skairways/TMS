import {
  Banknote,
  ChartLine,
  FolderGit2,
  Handshake,
  LayoutDashboard,
  MessageCircleWarning,
  UserRoundCog,
  Users,
} from "lucide-react";
import { AppPages } from "@/shared/constants/routes";

export const navigationMenuItems = [
  {
    title: "Dashboard",
    url: AppPages.DashboardPage,
    icon: ChartLine,
  },
  {
    title: "Loadboard",
    url: AppPages.LoadboardPage,
    icon: LayoutDashboard,
  },
  {
    title: "Gross",
    url: AppPages.GrossPage,
    icon: Banknote,
  },
  {
    title: "Teams",
    url: AppPages.TeamsPage,
    icon: Users,
  },
  {
    title: "Projects",
    url: AppPages.ProjectsPage,
    icon: FolderGit2,
  },
  {
    title: "Reports",
    url: AppPages.ReportsPage,
    icon: MessageCircleWarning,
  },
  {
    title: "Customers",
    url: AppPages.CustomersPage,
    icon: Handshake,
  },
  {
    title: "User Management",
    url: AppPages.UserManagementPage,
    icon: UserRoundCog,
  },
];
