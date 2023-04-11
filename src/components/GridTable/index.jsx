import { Grid } from "@mui/material";
import { useStyles } from "../../custom/styles";
import { GridTemplate } from "../GridTemplate";


const GridTable = () => {
  const classes = useStyles;

  return (
    <Grid container item sx={classes.containerGrid}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
        <GridTemplate key={index} index={index} classes={classes} />
      ))}
    </Grid>
  );
};

export { GridTable };
