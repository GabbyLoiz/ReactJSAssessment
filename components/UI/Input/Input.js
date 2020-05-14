import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <div>
                    <h3>{props.elementConfig.placeholder}</h3>
                    <input 
                    className={classes.InputElement} 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}/>
                </div>
            );
            break;
        default:
            inputElement = <input 
            className={classes.InputElement} 
            {...props.elementConfig} 
            value={props.value}/>;
    }


    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    ); 
};

export default input;