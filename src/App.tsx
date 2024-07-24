import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { useColorMode } from "./context/DarkModeContext";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>
        <Box width={"100%"} height={"100%"}>
          <Grid2 xs={12} sm={12} md={12} lg={12} xl={12} container>
            <Grid2 xs={12} sm={12} md={12} lg={12} xl={12}>
              hello
            </Grid2>
          </Grid2>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
