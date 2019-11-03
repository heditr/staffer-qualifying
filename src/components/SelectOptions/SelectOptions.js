import React from 'react';

export function Options({ options }) {
    return (
        options.map((option, i) => (
            <option key={`opt${i}`} value={option}>{option}</option>
        ))
    );
}


export function Select({
    value, handleChange, children, name,
}) {
    return (
        <select name={name} value={value} onChange={(event) => handleChange(event.target.name, event.target.value)}>
            {children}
        </select>
    );
}
