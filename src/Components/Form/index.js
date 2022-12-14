import React from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { TodoContext } from "../Context";


function Form() {  
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <TextareaAutosize
                value={newTodoValue}
                onChange={onChange}    
                aria-label="minimum height"
                minRows={3}
                placeholder="Write your task"
                style={{ width: 200}} 
            />
            <CardActions >
                <Button
                    onClick={onCancel}
                    type="button"
                    size="small" 
                    variant="outlined"
                >
                    Cancelar
                </Button>
                <Button
                    disabled = {!newTodoValue}
                    type="submit"
                    size="small"
                    variant="contained"
                    color="success"
                >
                    Guardar
                </Button>
            </CardActions>
        </form>
    );
    
}

export {Form};