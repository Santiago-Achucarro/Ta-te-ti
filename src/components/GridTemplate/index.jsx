import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { turnContext } from "../../custom/turnContext";

const GridTemplate = ({ index, classes }) => {
  const { gameState, handleClick } = useContext(turnContext);

  const [value, setValue] = useState(gameState[index]);

  useEffect(() => {
    setValue(gameState[index]);
  }, [gameState, index]);

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
      onClick={() => handleClick(index)}
    >
      {value}
    </Grid>
  );
};

export { GridTemplate };
