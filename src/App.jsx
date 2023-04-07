import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useStyles } from "./custom/styles";
import { GridTable } from "./components/GridTable";
import { Settings } from "./components/Settings";

function App() {
  const classes = useStyles;
  return (
    <Grid container sx={classes.root}>
      <Settings />
      <GridTable />
    </Grid>
  );
}

export default App;
