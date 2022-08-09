import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";

export function DeleteCommentModal({ commentId, id }) {
  const { deleteComment } = useContext(NewsContext);

  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        variant="standard"
        sx={{ color: "red", fontSize: 16 }}
        onClick={handleModal}
      >
        Excluir
      </Button>
      <Dialog
        open={open}
        onClose={handleModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {success ? (
          <>
            <DialogTitle
              id="alert-dialog-title"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              {"Comentário excluido com sucesso"}
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "white" }}>
              <DialogContentText
                id="alert-dialog-description"
                sx={{ color: "black" }}
              >
                Comentário excluido com sucesso!
              </DialogContentText>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle
              id="alert-dialog-title"
              sx={{ backgroundColor: "white", color: "black" }}
            >
              {"Você quer excluir este comentário?"}
            </DialogTitle>
            <DialogContent sx={{ backgroundColor: "white" }}>
              <DialogContentText
                id="alert-dialog-description"
                sx={{ color: "black" }}
              >
                Excluindo este comentário pessoas irão parar de ver este
                comentário.
              </DialogContentText>
            </DialogContent>
            <DialogActions sx={{ backgroundColor: "white" }}>
              <Button
                onClick={() => deleteComment(commentId, setSuccess, id)}
                sx={{
                  "&:hover": {
                    background: "red",
                    color: "white",
                  },
                }}
              >
                Excluir
              </Button>
              <Button
                onClick={handleModal}
                sx={{ "&:hover": { background: "blue", color: "white" } }}
              >
                Voltar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}
