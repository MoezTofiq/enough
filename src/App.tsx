import {
  Box,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@mui/material";
import "./App.css";
import { useColorMode } from "./context/DarkModeContext";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { LogoContainer } from "./Components/logoContainer";
import { CustomizationSection } from "./Components/CustomizationSection";
import { PageCustomization } from "./Components/PageCustomization";
import { BrowserAvailability } from "./Components/BrowserAvaiblility";
import { SyncsSettings } from "./Components/SyncingSettings";

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
          <Grid2 container component={Paper}>
            <LogoContainer />
          </Grid2>
          <Grid2 container>
            <CustomizationSection />
          </Grid2>
          <Grid2 container component={Paper}>
            <PageCustomization />
          </Grid2>
          <Grid2 container>
            <BrowserAvailability />
          </Grid2>
          <Grid2 container component={Paper}>
            <SyncsSettings />
          </Grid2>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
