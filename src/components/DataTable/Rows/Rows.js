import React from 'react';
import { useStateValue } from '../State';
import Cell from '../Cell/Cell';
import Button from '../../Button/Button';

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
                        ))
                    }
                    {
                        <Cell
                            content={<Button handleClick={() => { console.log(data[rowIndex]); }}
                                text="Candidate Details" /> }
                        />
                    }
                </tr>
            ))}
        </tbody>
    );
}
