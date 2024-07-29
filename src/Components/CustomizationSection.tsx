import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import image1 from "../assets/comparationImages/1.png";
import image2 from "../assets/comparationImages/2.png";
import image3 from "../assets/comparationImages/3.png";
import image4 from "../assets/comparationImages/4.png";
import ReactCompareImage from "react-compare-image";
import { useState } from "react";

export const CustomizationSection = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(0.5);
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
            Remove addicting elements
          </Typography>
          <Typography variant="h6" color="primary" textAlign={"center"}>
            in real time
          </Typography>
        </Grid2>

        <Grid2 container xs={12} sm={12} md={12} lg={12} xl={12} spacing={16}>
          <Grid2
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            display="flex"
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <ReactCompareImage
              leftImage={image3}
              rightImage={image4}
              rightImageLabel="ON"
              leftImageLabel="OFF"
              sliderLineWidth={4}
              onSliderPositionChange={(value: number) => {
                setSliderPosition(value);
              }}
              sliderPositionPercentage={sliderPosition}
            />
          </Grid2>
          <Grid2
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            display="flex"
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
          >
            <ReactCompareImage
              leftImage={image1}
              rightImage={image2}
              rightImageLabel="ON"
              leftImageLabel="OFF"
              sliderLineWidth={4}
              onSliderPositionChange={(value: number) => {
                console.log("number", value);
                setSliderPosition(value);
              }}
              sliderPositionPercentage={sliderPosition}
            />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};
