import React from "react";
import {HeaderContainer} from "./Header.styled";
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {

    return (
        <HeaderContainer>
            <header>
            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Life is simple{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                <Typewriter
                    words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={75}
                    delaySpeed={1000}
                />
                </span>
            </h1>
            </header>
        </HeaderContainer>
    );
}

export default Header;