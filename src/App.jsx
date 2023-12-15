import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Invoices from "./pages/invoices/Invoices";
import Contacts from "./pages/contacts/Contacts";
import Bar from "./pages/bar/Bar";
import Form from "./pages/form/Form";
import Line from "./pages/line/Line";
import Pie from "./pages/pie/Pie";
import FAQ from "./pages/faq/FAQ";
import Geography from "./pages/geography/Geography";
import Calendar from "./pages/calendar/Calendar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/bar",
        element: <Bar />,
      },
      {
        path: "/pie",
        element: <Pie />,
      },
      {
        path: "/line",
        element: <Line />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/geography",
        element: <Geography />,
      },
    ],
  },
]);

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
