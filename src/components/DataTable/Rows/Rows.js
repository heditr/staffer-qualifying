import React from 'react';
import { useStateValue } from '../State';
import Cell from '../Cell/Cell';

export default function Rows() {
    const [{ data }] = useStateValue();
    return (
        <tbody>
            {data.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                    {
                        data[rowIndex].map((_cell, cellIndex) => (
                            <Cell
                                key={`${rowIndex}-${cellIndex}`}
                                content={data[rowIndex][cellIndex]}
                            />
                        ))}
                </tr>
            ))}
        </tbody>
    );
}
