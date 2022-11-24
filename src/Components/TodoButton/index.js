import React from 'react';
import { Icon, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import './ToDoButton.css'

function TodoButton(){
    return (
        <IconButton className="addButton" aria-label="add" size="large">
            <AddCircleOutlineIcon/>
        </IconButton>
    )
}

export {TodoButton};