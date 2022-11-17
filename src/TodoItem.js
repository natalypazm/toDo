import { IconButton } from "@mui/material";
import React from "react";
import './TodoItem.css'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteIcon from '@mui/icons-material/Delete'

function TodoItem (props){
    const isCompleted = props.completed;
    return(
        <li className="toDoItem">
            {!!isCompleted ? 
                <IconButton aria-label="check">
                    <TaskAltIcon />
                </IconButton>:
                <IconButton aria-label="check" onClick={props.onComplete}>
                    <RadioButtonUncheckedIcon />
                </IconButton>
            }
            <p className={`itemText ${props.completed && 'itemText-complete'}`}>{props.text}</p>

            <IconButton aria-label="delete" className="iconTrash" onClick={props.onDelete}>
                <DeleteIcon />
            </IconButton>
        </li>
)}

export {TodoItem};