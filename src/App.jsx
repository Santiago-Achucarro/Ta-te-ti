import { turnContext } from "./custom/turnContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game } from "./pages/Game";
import { useState } from "react";
import { Home } from "./pages/Home";

function App() {
  const [current, setCurrent] = useState(true);
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [game, setGame] = useState([
    { game: false },
    { value: "" },
    { player: "" },
  ]);

  const handleClick = (index) => {
    const newGameState = [...gameState];
    if (gameState[index]) {
      return;
    }
    newGameState[index] = current ? "X" : "O";

    if (!game[0].game) {
      setGameState(newGameState);
      setCurrent(!current);
    }
  };

  const handleReset = () => {
    setGameState(Array(9).fill(null));
    setCurrent(true);
    setGame([{ game: false }, { value: "" }, { player: "" }]);
  };

  return (
    <turnContext.Provider
      value={{
        game: game,
        setGame: setGame,
        gameState: gameState,
        setGameState: setGameState,
        handleClick: handleClick,
        handleReset: handleReset,
        current: current,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </turnContext.Provider>
  );
}

export default App;
