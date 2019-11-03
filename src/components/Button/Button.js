import React from 'react';

export default function Button({ handleClick, text, type }) {
    return (
        <button onClick={handleClick} type={type}>
            {text}
        </button>
    );
}
