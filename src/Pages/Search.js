import React from 'react'
import "../css/search.css"
import { useEffect } from "react";
import { useContext } from 'react';
import MovieContext from "../components/MovieContext";
import { TextField, createMuiTheme, ThemeProvider, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";



function Search() {

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff",
            },
        },
    });

    const { id, setID } = useContext(MovieContext);


    useEffect(() => {

        setID({
            title: ""
        })

    }, [])
    const handleChange = (e) => {

        id.title = e.target.value;

    }

    let history = useHistory();

    const onClickButton = () => {
        if (id.title != "")
            history.push("/SearchResult");
        else
            alert("Please enter Title of a Movie or Series!");

    }
    return (
        <div>

            <span className="pageTitle">Search Movies and Series</span>
            <hr></hr>
            <ThemeProvider theme={darkTheme}>
                <div className="search">
                    <TextField
                        label="Title"
                        className="searchBox"
                        variant="filled"
                        placeholder='Enter Title'
                        style={{ flex: 1 }}
                        onChange={(event) => handleChange(event)}
                    />
                    <Button
                        onClick={(event) => onClickButton()}
                        className="addSubmitButton"
                        color='primary'
                        variant="contained"
                        style={{ marginLeft: 10 }}
                    >
                        <SearchIcon fontSize="large" />
                    </Button>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Search;