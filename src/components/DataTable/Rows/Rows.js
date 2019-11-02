import React from 'react';
import { useStateValue } from '../State';
import Cell from '../Cell/Cell';

export default function Rows() {
    const [{ data, cellHeights }] = useStateValue();

    console.log({ cellHeights });
    return (
        <tbody>
            {data.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                    {
                        data[rowIndex].map((_cell, cellIndex) => (
                            <Cell
                                key={`${rowIndex}-${cellIndex}`}
                                content={data[rowIndex][cellIndex]}
                                fixed={cellIndex === 0}
                                height={cellHeights.length > 0 && cellHeights[cellIndex]}
                            />
                        ))}
                </tr>
            ))}
        </tbody>
    );
}
