import React from 'react'

import { useContext } from 'react';

import { DataContext } from '../context/DataProvider';
// importing the editor component - used 3 times for html, css and js
import Editor from './Editor'

// to change css of below container consiting of all 3 ediotors
import {Box, styled} from '@mui/material';
const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 45vh;
`


const Code = () => {

    const {html, setHtml, css, setCss, js, setJs}  = useContext(DataContext);

    return (
        <Container>
            <Editor 
                heading = "HTML"
                icon = "/"
                color= "#FF3C41"
                value = {html}
                onChange = {setHtml}
            />
            <Editor 
                heading = "CSS"
                icon = "*"
                color= "#0EBEFF"
                value = {css}
                onChange = {setCss}
            />
            <Editor
                heading = "JavaScript" 
                icon = "()"
                color= "#FCD000"
                value = {js}
                onChange = {setJs}
            />
        </Container>
    )
}

export default Code 
