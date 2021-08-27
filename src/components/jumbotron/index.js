import React from 'react';
import {Inner} from "./styles/jumbotron"

export default function Jumbotron({children,direction ='row',...restProps}) {
    return (
        <Inner direction={direction}>
            <p>hello again</p>

        </Inner>
    )
}
 
