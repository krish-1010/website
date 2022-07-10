import React from 'react';
import Container from './Container';

export default function Main(props) {
    return(
        <div id='Main' className={props.darkMode ? "dark":""}>
            <Container/>
        </div>
    );
}