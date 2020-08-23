import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Button, Input, IconLink } from './components/styled/common/StyledComps';
import { MainMenu } from './components/home/MainMenu';
import { Github } from '@styled-icons/fa-brands';

const HomeSection = styled.section`
    width: 100%;
    height: 500px;
    position: relative;

    ${IconLink} {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;

const H1 = styled.h1`
    font-family: 'Black Ops One';
    font-size: 60px;
    font-style: italic;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #fff;
`;

function App() {
    return (
        <div className='App'>
            <HomeSection>
            <IconLink href="https://www.github.com">
                <Github />
            </IconLink>
            <H1>codenames app</H1>
            </HomeSection>
            
            <MainMenu />
            <Button>Hello</Button>
            {<br></br>}
            <Button lg btc='#000000' bgc='#ffffff'>
                Hello
            </Button>
            {<br></br>}
            <Input placeholder='placeholer' type='text' />
        </div>
    );
}

export default App;
