import React from 'react';

/*

Explain about props (props is object): 

const props = { 
    value: 'X',
    onClick: () => true
}

*/
const Cell = (props) => {
    return (
        <div className='game-cell' onClick={props.onClick}>
            {props.value}
        </div>
    );
};

export default Cell;