import { useContext, useEffect } from "react";
import {
  GridTable,
  Settings,
  ModalGame,
  InfoGame,
} from "../../components/index";
import { winConditions } from "../../custom/winConditions";
import { turnContext } from "../../custom/turnContext";
import { useStyles } from "../../custom/styles";
import { Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Game = () => {
  const classes = useStyles;
  const navigate = useNavigate();
  const { gameState, game, setGame, handleReset, current } =
    useContext(turnContext);

  const { state } = useLocation();

  const calculateWinner = () => {
    gameState.some((value) => {
      if (value !== null) {
        for (let i = 0; i < winConditions.length; i++) {
          const [a, b, c] = winConditions[i];
          if (
            gameState[a] &&
            gameState[a] === gameState[b] &&
            gameState[a] === gameState[c]
          ) {
            setGame([
              { game: true },
              { value: gameState[a] },
              {
                player:
                  gameState[a] === "X" ? state.playerOne : state.playerTwo,
              },
            ]);
            return;
          }
        }
      }
    });
  };

  useEffect(() => {
    if (state !== null) {
      calculateWinner();
    } else {
      setGame([
        { game: true },
        { value: "Please back home and insert players" },
        {
          player: "",
        },
      ]);
    }
  }, [gameState, state]);

  console.log(game);
  useEffect(() => {}, [state]);

  return state ? (
    <>
      <Grid container sx={classes.root}>
        <Settings />
        <ModalGame
          open={game}
          setGame={setGame}
          handleReset={handleReset}
          title={"Game Over"}
        />
        <InfoGame
          value={current ? "X" : "O"}
          playerX={state.playerOne}
          playerO={state.playerTwo}
        />
        <GridTable />
      </Grid>
    </>
  ) : (
    <Grid container sx={classes.root}>
      <Settings />
      <ModalGame
        open={game}
        setGame={setGame}
        handleReset={handleReset}
        title={"Error"}
      />
      <GridTable />
    </Grid>
  );
};

export { Game };
