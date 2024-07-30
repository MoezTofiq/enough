import { Box, Paper, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BrowserList, BrowserStoreLinks } from "../../shared/BrowserRelated";

function createData(
  icon: string,
  browser: string,
  storeLink: string,
  offlineDownload: string
) {
  return { icon, browser, storeLink, offlineDownload };
}

const rows = [
  ...Object.keys(BrowserList).map((BrowserName) => {
    return createData(
      BrowserList[BrowserName],
      BrowserName,
      "Coming Soon",
      "Coming Soon"
    );
  }),
];

console.log(rows);

const DownloadPage = () => {
  return (
    <Box width={"100%"} height={"100%"} textAlign={"center"}>
      <Grid2
        container
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
        padding={5}
        rowSpacing={4}
      >
        <Grid2 xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography
            sx={{
              typography: {
                xs: "h4",
                sm: "h3",
                md: "h2",
                lg: "h1",
                xl: "h1",
              },
            }}
          >
            Download
            <span style={{ color: "#cc3e8e" }}>Enough</span>
          </Typography>
          <Typography
            sx={{
              typography: {
                xs: "h5",
                sm: "h4",
                md: "h3",
                lg: "h3",
                xl: "h3",
              },
            }}
          >
            The way <span style={{ color: "#cc3e8e" }}>you</span> want,
          </Typography>
          <Typography
            sx={{
              typography: {
                xs: "h6",
                sm: "h5",
                md: "h4",
                lg: "h4",
                xl: "h4",
              },
            }}
          >
            For what <span style={{ color: "#cc3e8e" }}>you</span> want
          </Typography>
        </Grid2>
        <Grid2 xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper
            elevation={24}
            sx={{
              boxShadow: "0 0 10px 5px rgba(204, 62, 142,0.5)",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0 0 20px 10px rgba(204, 62, 142,0.5)",
              },
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "100%" }} aria-label="DownLoad table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography
                        sx={{
                          typography: {
                            xs: "caption",
                            sm: "h5",
                            md: "h4",
                            lg: "h4",
                            xl: "h4",
                          },
                        }}
                      >
                        Browser
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        sx={{
                          typography: {
                            xs: "caption",
                            sm: "h5",
                            md: "h4",
                            lg: "h4",
                            xl: "h4",
                          },
                        }}
                      >
                        Extension Store
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        sx={{
                          typography: {
                            xs: "caption",
                            sm: "h5",
                            md: "h4",
                            lg: "h4",
                            xl: "h4",
                          },
                        }}
                      >
                        Offline DownLoad
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.browser}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Box display="flex" alignItems="center">
                          <img
                            src={row.icon}
                            alt={row.browser}
                            style={{ width: 24, height: 24, marginRight: 8 }}
                          />
                          {row.browser}
                        </Box>
                      </TableCell>
                      {BrowserStoreLinks[
                        row.browser as keyof typeof BrowserStoreLinks
                      ] ? (
                        <TableCell align="right">
                          <a
                            href={
                              BrowserStoreLinks[
                                row.browser as keyof typeof BrowserStoreLinks
                              ]
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Go to {row.browser} store
                          </a>
                        </TableCell>
                      ) : (
                        <TableCell align="right">{row.storeLink}</TableCell>
                      )}
                      <TableCell align="right">{row.offlineDownload}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default DownloadPage;
