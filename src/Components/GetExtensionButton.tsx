import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";

export const GetExtensionButton = () => {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Grid2 container justifyContent="center" alignItems="center">
        <Grid2
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{ borderRadius: 10 }}
            onClick={() => {
              navigate("/download");
            }}
          >
            Download Extension
          </Button>
        </Grid2>
      </Grid2>
    </Box>
  );
};
