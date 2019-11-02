import React from 'react';
import { useStateValue } from '../State';
import Cell from '../Cell/Cell';

export default function Thead() {
    const [{ headings, cellHeights }] = useStateValue();
    return (
        <thead>
            <tr key="heading">
                {headings.map((cell, cellIndex) => (
                    <Cell
                        key={`heading-${cellIndex}`}
                        content={headings[cellIndex]}
                        header={true}
                        fixed={cellIndex === 0}
                        height={cellHeights.length > 0 && cellHeights[cellIndex]}
                    />
                ))}
            </tr>
        </thead>
    );
}
