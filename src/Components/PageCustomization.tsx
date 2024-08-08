import { Box, Modal, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import image1 from "../assets/customize/1.png";
import image2 from "../assets/customize/2.png";
import image3 from "../assets/customize/3.png";
import image4 from "../assets/customize/4.png";
import image5 from "../assets/customize/5.png";
import image6 from "../assets/customize/6.png";
import image7 from "../assets/customize/7.png";
import image8 from "../assets/customize/8.png";
import image9 from "../assets/customize/9.png";
import image10 from "../assets/customize/10.png";
import image11 from "../assets/customize/11.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

export const PageCustomization = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={10}
      position="relative"
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
            Customize
          </Typography>
          <Typography variant="h6" color="primary" textAlign={"center"}>
            what you see
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
          <Box
            position="relative"
            width="100%"
            height="0"
            paddingTop="56.25%" // 16:9 aspect ratio
            maxHeight="80vh"
            onClick={handleOpen}
            sx={{
              willChange: "filter",
              transition: "filter 300ms",
              cursor: "pointer",
              "&:hover": {
                filter: "drop-shadow(0 0 2em purple)",
              },
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: index === currentImageIndex ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                }}
              />
            ))}
          </Box>
        </Grid2>
      </Grid2>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position="relative"
          onClick={handleOpen}
          width={"80%"}
          height={"75%"}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "fill",
                opacity: index === currentImageIndex ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          ))}
        </Box>
      </Modal>
    </Box>
  );
};
