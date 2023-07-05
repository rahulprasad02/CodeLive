import React from 'react'

import { useState } from 'react';

// import Box component from mui - box is a div only frm mui
import { Box, styled } from '@mui/material';
// importing required icons
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
// importing "controlled component" of the library - codemirror-2 (using some alias name)
import { Controlled as ControlledEditor } from 'react-codemirror2';
// importing the reuired css files for codeEditor
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/xml/xml'; // in react we use xml tags not html, here we import files that detect the written xml code
import 'codemirror/mode/javascript/javascript'; // here we import files that detect the written JS code
import 'codemirror/mode/css/css'; // here we import files that detect the written css code

// importing css for the edior part - codemirror - this is the css that we have designed
import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 5px 5px;
`

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px; 
`

const Header = styled(Box)`
    background: #060606;
    display: flex; 
    color: #FFFFFF;
    justify-content: space-between;
    font-weight: 700;
`

const Editor = ({ heading, icon, color, value, onChange }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    return (
        <Container style = {open ? null : {flexGrow: 0}}>
            <Header>
                <Heading>
                    <Box // this box is for icon only
                        component="span"
                        style={{
                            background: color,
                            display: 'flex',
                            height: 20,
                            width: 20,
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            paddingTop: 2,
                            color: '#000'
                        }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize='small'
                    style={{alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>
            <ControlledEditor
                className='controlled-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </Container>
    )
}

export default Editor
