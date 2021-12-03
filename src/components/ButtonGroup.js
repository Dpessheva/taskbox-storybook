import React from 'react';
import Button from './Button';

const ButtonGroup = ({buttons}) => {
    return (
        <div>
            {buttons.map((b, i) => (
                <Button key={ i} primary={b.primary} backgroundColor={b.backgroundColor} label={b.label} ></Button>
            ))}
        </div>
    )
}

export default ButtonGroup;


