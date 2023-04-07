import { Grid } from "@mui/material";

const GridTemplate = ({ index, classes, value }) => {
  return (
    <Grid
      item
      xs={4}
      sx={{
        ...classes.gridItem,
        color: index % 2 === 0 ? "black" : "white",
        backgroundColor: index % 2 === 0 ? "#BEBEBE  " : "#3F3F3F",
        borderTopLeftRadius: index === 0 ? "5px" : "0px",
        borderTopRightRadius: index === 2 ? "5px" : "0px",
        borderBottomLeftRadius: index === 6 ? "5px" : "0px",
        borderBottomRightRadius: index === 8 ? "5px" : "0px",
      }}
    >
      {value}
    </Grid>
  );
};

export { GridTemplate };
