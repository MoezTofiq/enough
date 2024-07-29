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
      <Typography variant="h1">
        Download
        <span style={{ color: "purple" }}>Enough</span>
      </Typography>
      <Typography variant="h3">
        The way <span style={{ color: "purple" }}>you</span> want,
      </Typography>
      <Typography variant="h4">
        For what <span style={{ color: "purple" }}>you</span> want
      </Typography>
      <Grid2
        container
        justifyContent={"center"}
        alignContent={"center"}
        display={"flex"}
        padding={5}
      >
        <Paper
          elevation={24}
          sx={{
            boxShadow: "0 0 10px 5px rgba(128, 0, 128, 0.5)",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 0 20px 10px rgba(128, 0, 128, 0.75)",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 750 }} aria-label="DownLoad table">
              <TableHead>
                <TableRow>
                  <TableCell>Browser</TableCell>
                  <TableCell align="right">Extension Store</TableCell>
                  <TableCell align="right">Offline DownLoad</TableCell>
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
    </Box>
  );
};

export default DownloadPage;
