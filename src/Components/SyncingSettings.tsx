import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloudIcon from "@mui/icons-material/Cloud";
import SyncIcon from "@mui/icons-material/Sync";

export const SyncsSettings = () => {
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
          gap={1}
        >
          <Typography variant="h2" color="primary" textAlign={"center"}>
            Sync your settings to and from the cloud
          </Typography>
          <Typography variant="h6" color="primary" textAlign={"center"}>
            automatically and manually
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
          position="relative"
        >
          <CloudIcon color="primary" sx={{ zIndex: 0, fontSize: 180 }} />
          <SyncIcon
            sx={{
              position: "absolute",
              animation: "spin 2s linear infinite",
              zIndex: 1,
              fontSize: 80,
            }}
          />
        </Grid2>
      </Grid2>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
        `}
      </style>
    </Box>
  );
};
