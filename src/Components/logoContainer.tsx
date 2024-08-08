import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import logo from "../assets/logo.png";
import { GetExtensionButton } from "./GetExtensionButton";
import { useNavigate } from "react-router-dom";

export const LogoContainer = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={10}
      paddingTop={15}
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
          <Box
            component="img"
            onClick={() => {
              navigate("/download");
            }}
            src={logo}
            alt="Logo"
            sx={{
              maxWidth: "300px",
              maxHeight: "300px",
              height: "12em",
              padding: "1.5em",
              willChange: "filter",
              transition: "filter 300ms",
              cursor: "pointer",
              "&:hover": {
                filter: "drop-shadow(0 0 2em purple)",
              },
            }}
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
            variant="h2"
            color="primary"
            border={"3px solid"}
            paddingX={6}
            paddingY={1}
            borderRadius={"60px 6px"}
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
            Customize and control your social media experience
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
