import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./App.css";
import { useColorMode } from "./context/DarkModeContext";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DownloadPage from "./Pages/DownloadPage/DownloadPage.tsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.tsx";
import { LandingPage } from "./Pages/LandingPage/LandingPage.tsx";
import logo from "./assets/logo.png";

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
    {
      path: "/download/",
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
        <Container maxWidth={false} disableGutters>
          <main>
            <RouterProvider router={router} />
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"row"}
              component={Paper}
            >
              {/* <Box
                component="img"
                src={logo}
                alt="Logo"
                padding={1}
                sx={{
                  maxWidth: "50px",
                  maxHeight: "50px",

                  // willChange: "filter",
                  // transition: "filter 300ms",
                  // cursor: "pointer",
                  // "&:hover": {
                  //   filter: "drop-shadow(0 0 2em purple)",
                  // },
                }}
              /> */}
              <Typography variant="button">enough &copy;</Typography>
            </Box>
          </main>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
