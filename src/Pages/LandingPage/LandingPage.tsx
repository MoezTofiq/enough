import { Box, Paper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { LogoContainer } from "../../Components/logoContainer";
import { CustomizationSection } from "../../Components/CustomizationSection";
import { PageCustomization } from "../../Components/PageCustomization";
import { BrowserAvailability } from "../../Components/BrowserAvaiblility";
import { SyncsSettings } from "../../Components/SyncingSettings";
import { ImproveSettings } from "../../Components/ImproveSettings";

export const LandingPage = () => {
  return (
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
      <Grid2 container>
        <ImproveSettings />
      </Grid2>
    </Box>
  );
};
