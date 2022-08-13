import { IconButton, Modal, TextField, makeStyles } from '@material-ui/core';
import React from 'react'
import styles from "./Auth.module.css";
import SendIcon from "@material-ui/icons/Send";

interface forgotModalProps {
  isOpen: boolean
  email: string
  setResetEmail: React.Dispatch<React.SetStateAction<string>>
  onCloseModal: () => void
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    outline: "none",
    position: "absolute",
    width: 400,
    borderRadius: 10,
    backgroundColor: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(10),
  },
}));

const ForgotModal: React.FC <forgotModalProps> = (props) => {
  const { isOpen, email, setResetEmail, onCloseModal } = props

  const classes = useStyles();


  return (
    <Modal open={isOpen} onClose={() => onCloseModal()}>
      <div style={getModalStyle()} className={classes.modal}>
        <div className={styles.login_modal}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            type="email"
            name="email"
            label="Reset E-mail"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setResetEmail(e.target.value);
            }}
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </Modal>
  )
}

export default ForgotModal