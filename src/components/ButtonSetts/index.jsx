import { Button } from "@mui/material";
import { useContext } from "react";
import { turnContext } from "../../custom/turnContext";
import { useNavigate } from "react-router-dom";

const ButtonSetts = ({ value, background }) => {
  const { handleReset } = useContext(turnContext);
  const navigate = useNavigate();

  const handleMenu = () => {
    handleReset();
    navigate("/");
  };

  return (
    <Button
      sx={{
        backgroundColor: background,
        transition: "0.3s all ease-out",
        boxShadow: "2px 2px 2px 0px black",
        color: value === "Restart" ? "white" : "black",
        "&:hover": {
          backgroundColor: background,
          transition: "0.3s all ease-in",
          opacity: "0.6",
        },
      }}
      onClick={() => (value === "Restart" ? handleReset() : handleMenu())}
    >
      {value}
    </Button>
  );
};

export { ButtonSetts };
