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
      />
      <ButtonSetts
        classes={classes}
        background="#BEBEBE"
        value={"Menu"}
      />
    </Grid>
  );
};

export { Settings };
