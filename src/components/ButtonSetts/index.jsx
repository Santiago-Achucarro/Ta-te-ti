import { Button } from "@mui/material";

const ButtonSetts = ({ value, classes, background, hover }) => {
  return (
    <Button
      sx={{
        backgroundColor: background,
        transition: "0.3s all ease-out",
        color: value === "Restart" ? "white" : "black",
        "&:hover": {
          backgroundColor: background,
          transition: "0.3s all ease-in",
          opacity:"0.8"
        },
      }}
    >
      {value}
    </Button>
  );
};

export { ButtonSetts };
