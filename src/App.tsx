import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { useColorMode } from "./context/DarkModeContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DownloadPage from "./Pages/DownloadPage/DownloadPage.tsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.tsx";
import { LandingPage } from "./Pages/LandingPage/LandingPage.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },

    {
      path: "/download",
      element: <DownloadPage />,
      errorElement: <ErrorPage />,
    },
  ],
  { basename: "/enough" }
);

function App() {
  const { isDarkMode } = useColorMode();
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#cc3e8e",
      },
      secondary: {
        main: "#3ecc7c",
      },
      background: {
        default: isDarkMode ? "#282828" : "#f4f4f4",
      },
    },
    typography: {
      fontFamily:
        "Optimistic Display, -apple-system, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
