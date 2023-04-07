import { Grid } from "@mui/material";
import { useStyles } from "../../custom/styles";
import { ButtonSetts } from "../ButtonSetts";

const Settings = () => {
  const classes = useStyles;
  return (
    <Grid sx={classes.containerSettings}>
      <ButtonSetts
        classes={classes}
        value={"Restart"}
        background="#3F3F3F"
        hover={"#BEBEBE"}
      />
      <ButtonSetts
        classes={classes}
        background="#BEBEBE"
        value={"Menu"}
        hover={"#3F3F3F"}
      />
    </Grid>
  );
};

export { Settings };
