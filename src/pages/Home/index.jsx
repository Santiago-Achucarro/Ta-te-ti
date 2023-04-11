import { Grid, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../../custom/styles";
import { useState } from "react";

const Home = () => {
  let navigate = useNavigate();

  const classes = useStyles;
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [errorField, setErrorField] = useState([
    { first: false },
    { second: false },
  ]);

  const validateTextField = (value) => {
    if (/^[a-zA-Z]*$/.test(value)) {
      return true;
    }
    return false;
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrorField([
      {
        first: playerOneName == "",
      },
      {
        second: playerTwoName == "",
      },
    ]);

    const validateFirst = validateTextField(playerOneName);

    const validateSecond = validateTextField(playerTwoName);

    if (playerOneName == playerTwoName) {
      return setErrorField([
        {
          first: true,
        },
        {
          second: true,
        },
      ]);
    }

    if (validateFirst && validateSecond) {
      if (playerOneName !== "" && playerTwoName !== "") {
        navigate("/game", {
          state: { playerOne: playerOneName, playerTwo: playerTwoName },
        });
      }
    } else {
      setErrorField([{ first: !validateFirst }, { second: !validateSecond }]);
    }
  };
  console.log(errorField);
  return (
    <Grid sx={classes.root}>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <Grid sx={classes.containerHome}>
          <Typography sx={{ fontSize: "25px" }}>Ta Te Ti</Typography>
          <TextField
            label={"Player X"}
            value={playerOneName}
            onChange={(event) => setPlayerOneName(event.target.value)}
            error={errorField[0].first}
          />
          <TextField
            label={"Player O"}
            value={playerTwoName}
            onChange={(event) => setPlayerTwoName(event.target.value)}
            error={errorField[1].second}
          />
          <Button
            type="submit"
            sx={{
              background: "grey",
              color: "black",
              "&:hover": { background: "grey", opacity: "0.8" },
            }}
          >
            Enviar
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export { Home };
