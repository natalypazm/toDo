import React, { Fragment } from "react";
import { TextField } from "@mui/material";

import './ToDoSearch.css';
import { TodoContext } from "../Context";


function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value)
    }
 
    return (
        <Fragment>
            <TextField
                className="search"
                label="Search" variant="outlined"
                placeholder="Search your task"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <p>{searchValue}</p>
        </Fragment>
    )
}

export {TodoSearch}