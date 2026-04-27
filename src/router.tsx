import { createBrowserRouter } from "react-router-dom";
import {Layout} from "./components/layout/Layout";
import {Dashboard} from "./pages/dashboard/Dashboard";
import {SettingsPages} from "./pages/settings/Settings";
import { LeadsPage } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout  />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/leads",
          element: <LeadsPage />,
        },
        {
          path: "/settings",
          element: <SettingsPages />,
        },
      ],
    },  
  ]
);
export default router;