import React, { Fragment } from "react";
import { TextField } from "@mui/material";

import './ToDoSearch.css';


function TodoSearch({searchValue, setSearchValue}) {
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