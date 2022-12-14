import React from 'react';
import { Icon, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import './ToDoButton.css'

function TodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <IconButton onClick={onClickButton} className="addButton" aria-label="add" size="large">
            <AddCircleOutlineIcon/>
        </IconButton>
    )
}

export {TodoButton};