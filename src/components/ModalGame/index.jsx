import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ModalGame(props) {
  const { setGame, open, handleReset, title } = props;
  let navigate = useNavigate();

  const handleClose = () => {
    handleReset();
    navigate("/");
  };

  return open[1].value && open[2].player ? (
    <Dialog onClose={handleClose} open={open[0].game} maxWidth={"xs"} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {`${open[2].player} with ${open[1].value}  is won`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Menu</Button>
        <Button onClick={handleReset}>Try again</Button>
      </DialogActions>
    </Dialog>
  ) : (
    <Dialog onClose={handleClose} open={open[0].game} maxWidth={"xs"} fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ padding: "20px" }}>
        <DialogContentText>{`${open[1].value}`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Menu</Button>
        <Button onClick={handleReset}>Try again</Button>
      </DialogActions>
    </Dialog>
  );
}

ModalGame.propTypes = {
  setGame: PropTypes.func.isRequired,
  open: PropTypes.array.isRequired,
};

export { ModalGame };
