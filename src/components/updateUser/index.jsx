import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { useForm, useInput } from "lx-react-form";


export function UpdateUser(type) {
  const tel = useInput({
    name: "tel",
  });

  const cep = useInput({
    name: "cep",
  });

  const rua = useInput({
    name: "rua",
  });

  const numero = useInput({
    name: "numero",
  });

  const bairro = useInput({
    name: "bairro",
  });

  const cidade = useInput({
    name: "cidade",
  });

  const state = useInput({
    name: "state",
  });

  const form = useForm({
    clearFields: true,
    formFields: [tel, cep, rua, numero, bairro, cidade, state],
    submitCallback: (formData) => {
      if(type==="company"){
        console.log("tornar uma empresa",formData);
      }else{
        console.log("tornar um jornalista",formData);
      }
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
        {type==="content creator" ? (<h2>Se torne uma Empresa</h2>):(<h2>Se torne um Jornalista</h2>)}
      <TextField
        id="standard-basic"
        label="Telefone para contato"
        variant="standard"
        {...tel.inputProps}
      />
      <TextField
        id="standard-basic"
        label="CEP"
        variant="standard"
        {...cep.inputProps}
      />
      <TextField
        id="standard-basic"
        label="Rua"
        variant="standard"
        {...rua.inputProps}
      />
      <TextField
        id="standard-basic"
        label="Numero"
        variant="standard"
        {...numero.inputProps}
      />
      <TextField
        id="standard-basic"
        label="Bairro"
        variant="standard"
        {...bairro.inputProps}
      />
      <TextField
        id="standard-basic"
        label="Cidade"
        variant="standard"
        {...cidade.inputProps}
      />
      <TextField
        id="standard-basic"
        label="State"
        variant="standard"
        {...state.inputProps}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function BasicModal(type) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 console.log(type)
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateUser type={type}/>
        </Box>
      </Modal>
    </div>
  );
}
