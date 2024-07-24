import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import logo from "../assets/logo.png";
import { GetExtensionButton } from "./GetExtensionButton";

export const LogoContainer = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={5}
    >
      <Grid2 container justifyContent="center" alignItems="center" rowGap={2}>
        <Grid2
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="center"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
        </Grid2>
        <Grid2
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="center"
        >
          <Typography
            variant="h3"
            color="primary"
            border={"3px solid"}
            paddingX={6}
            paddingY={1}
            borderRadius={"64px 6px"}
          >
            Enough
          </Typography>
        </Grid2>
        <Grid2
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="center"
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography
            variant="h5"
            color="primary"
            textAlign={"center"}
            paddingBottom={1}
          >
            Customize and control you social media experience
          </Typography>
          <Typography variant="h6" color="primary" textAlign={"center"}>
            Removing distractions, seamlessly across browser
          </Typography>
        </Grid2>
        <GetExtensionButton />
      </Grid2>
    </Box>
  );
};
