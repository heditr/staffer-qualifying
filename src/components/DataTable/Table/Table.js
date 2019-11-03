import React, { useCallback, useEffect, useState } from 'react';
import './index.scss';
import { useStateValue } from '../State';
import { setCellHeights, setTableRef } from '../actionTypes';

function getTallestCellHeights(tableRef) {
    if (!tableRef) {
        return [];
    }

    const rows = Array.from(tableRef.getElementsByTagName('tr'));
    return rows.map((row) => {
        const fixedCell = (row.childNodes)[0];
        return Math.max(row.clientHeight, fixedCell.clientHeight);
    }) || [];
}

export default function Table({ children }) {
    const [{ tableRef }, dispatch] = useStateValue();
    const [, setCellHeightsState] = useState([]);

    useEffect(() => {
        const cellHeights = getTallestCellHeights(tableRef);
        setCellHeightsState(cellHeights);
        dispatch(setCellHeights(cellHeights));
    }, [tableRef]);

    const tableRefSet = useCallback((node) => {
        if (node !== null) {
            dispatch(setTableRef(node));
        }
    }, []);

    return (
        <table className='it-table' ref={tableRefSet}>
            {children}
        </table>
    );
}
