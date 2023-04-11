import { Box, Grid, Typography } from "@mui/material";
import { useStyles } from "../../custom/styles";
import { useEffect, useState } from "react";

const InfoGame = ({ value, playerX, playerO }) => {
  const classes = useStyles;
  const [player, setPlayer] = useState(value === "X" ? playerX : playerO);

  useEffect(() => {
    setPlayer(value === "X" ? playerX : playerO);
  }, [value]);

  return (
    <Box sx={classes.containerInfo}>
      <Typography sx={classes.Typography}>
        Is the turn for {player} with {value}
      </Typography>
    </Box>
  );
};

export { InfoGame };
