import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./BrowserAvailability.module.css";
import { BrowserList } from "../shared/BrowserRelated";

const browserLogos = Object.values(BrowserList);

export const BrowserAvailability = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      paddingY={10}
      paddingX={1}
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
          <Typography variant="h2" color="primary" textAlign={"center"}>
            Coming soon to every Browser
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
          <Box className={styles.slider}>
            <Box className={styles.sliderInner}>
              {browserLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Browser ${index + 1}`}
                  className={styles.browserLogo}
                  height="50px"
                />
              ))}
              {/* Repeat logos to create a continuous loop */}
              {browserLogos.map((logo, index) => (
                <img
                  key={index + browserLogos.length}
                  src={logo}
                  alt={`Browser ${index + 1}`}
                  className={styles.browserLogo}
                  height="50px"
                />
              ))}
              {browserLogos.map((logo, index) => (
                <img
                  key={index + browserLogos.length}
                  src={logo}
                  alt={`Browser ${index + 1}`}
                  className={styles.browserLogo}
                  height="50px"
                />
              ))}
              {browserLogos.map((logo, index) => (
                <img
                  key={index + browserLogos.length}
                  src={logo}
                  alt={`Browser ${index + 1}`}
                  className={styles.browserLogo}
                  height="50px"
                />
              ))}
              {browserLogos.map((logo, index) => (
                <img
                  key={index + browserLogos.length}
                  src={logo}
                  alt={`Browser ${index + 1}`}
                  className={styles.browserLogo}
                  height="50px"
                />
              ))}
              {browserLogos.map((logo, index) => (
                <img
                  key={index + browserLogos.length}
                  src={logo}
                  alt={`Browser ${index + 1}`}
                  className={styles.browserLogo}
                  height="50px"
                />
              ))}
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};
