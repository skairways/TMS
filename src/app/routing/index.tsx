import { createBrowserRouter, Navigate } from "react-router-dom";

import LoadbordPage from "@/pages/loadboard";
import DashboardPage from "@/pages/dashboard";
import GrossPage from "@/pages/gross";
import TeamsPage from "@/pages/teams";
import ProjectsPage from "@/pages/projects";
import ReportsPage from "@/pages/reports";
import CustomersPage from "@/pages/customers";
import UserManagementPage from "@/pages/user-management";
import NotFoundPage from "@/pages/not-found";
import LoginPage from "@/pages/login";

import { AppPages } from "@/shared/constants/routes";
import { RocketLoader } from "@/shared/ui";
import { Layout } from "@/widgets";

export const router = createBrowserRouter([
  {
    path: AppPages.RootPage,
    element: <Layout />,
    hydrateFallbackElement: <RocketLoader />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: AppPages.RootPage,
        element: <DashboardPage />,
      },
      {
        path: AppPages.DashboardPage,
        element: <DashboardPage />,
      },
      {
        path: AppPages.LoadboardPage,
        element: <LoadbordPage />,
      },
      {
        path: AppPages.GrossPage,
        element: <GrossPage />,
      },
      {
        path: AppPages.TeamsPage,
        element: <TeamsPage />,
      },
      {
        path: AppPages.ProjectsPage,
        element: <ProjectsPage />,
      },
      {
        path: AppPages.ReportsPage,
        element: <ReportsPage />,
      },
      {
        path: AppPages.CustomersPage,
        element: <CustomersPage />,
      },
      {
        path: AppPages.UserManagementPage,
        element: <UserManagementPage />,
      },
      {
        path: AppPages.NotFoundPage,
        element: <NotFoundPage />,
      },
    ],
  },
  { path: AppPages.LoginPage, element: <LoginPage /> },
  {
    path: AppPages.AnyPage,
    element: <Navigate replace to={AppPages.NotFoundPage} />,
  },
]);
