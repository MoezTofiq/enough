import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

export const ImproveSettings = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={10}
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
          flexDirection={"column"}
        >
          <Typography variant="h2" color="primary" textAlign={"center"}>
            Improve loading times
          </Typography>
          <Typography variant="h6" color="primary" textAlign={"center"}>
            By not loading sections on the screen
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
          alignItems="center"
          flexDirection={"column"}
        >
          <HistoryToggleOffIcon
            color="primary"
            sx={{ zIndex: 0, fontSize: 180 }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};
