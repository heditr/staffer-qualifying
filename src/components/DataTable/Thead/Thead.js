import React from 'react';
import { useStateValue } from '../State';
import Cell from '../Cell/Cell';

export default function Thead() {
    const [{ headings }] = useStateValue();
    return (
        <thead>
            <tr key="heading">
                {headings.map((cell, cellIndex) => (
                    <Cell
                        key={`heading-${cellIndex}`}
                        content={headings[cellIndex]}
                        header={true}
                    />
                ))}
            </tr>
        </thead>
    );
}
