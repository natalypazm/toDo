import React from "react";
import ReactDOM from "react-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Form } from "../Form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    minWidth: 300
  };
  

function MyModal({children , props }) {  

  return ReactDOM.createPortal(
    <Card sx={style}>
      <CardContent>
        <Form />
      </CardContent>
    </Card>,
    document.getElementById('modal')
  );
}

export {MyModal};