import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import styles from "./BrowserAvailability.module.css";

const browserLogos = [
  "https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F146XrcDe3MhKwmvFRlzMaC%2Fdc8c20b7132a47f98e1a180241c2630a%2Fimage.png",
  "https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F29kray99O8UkbeocBioPV%2Ffd5b03fd4942f43e212634dbefe0be53%2FMaster_Brand_Icon.png",
  "https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F4XwXnOrCWYL0qGXMTARBLl%2Fb9367b5dcb2be3381fef45b4378dc6de%2FMicrosoft_Edge_-282019-29.png",
  "https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F5NKPwrMnIovQNSug6Lx3Xr%2Fcfc33fe52bf70e180c59ba74077bf8a0%2Fsafari-240.png",
  "https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_360/https%3A%2F%2Fimages.ctfassets.net%2Fdm4oa8qtogq0%2F6hk7lPZH7ThyMHVYa0vNRN%2F4292f5033ba1f4ff9eb99af3da485120%2Fopera_Icon_flat-color_red_rgb.png",

  // Add more as needed
];

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
            Coming on every Browser
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
