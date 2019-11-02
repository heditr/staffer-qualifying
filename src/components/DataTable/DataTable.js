import React from 'react';
import { TableProvider } from './State';
import Thead from './Thead/Thead';
import Rows from './Rows/Rows';
import Table from './Table/Table';
import { SET_CELL_HEIGHTS, SET_TABLE_REF } from './actionTypes';

const initialState = {
    cellHeights: [],
    tableRef: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TABLE_REF:
            return { ...state, tableRef: action.tableRef };
        case SET_CELL_HEIGHTS:
            return { ...state, cellHeights: action.cellHeights };
        default:
            return state;
    }
};

export default function DataTable({ headings, data }) {
    const initState = {
        ...initialState,
        headings,
        data,
    };

    return (
        <TableProvider initialState={initState} reducer={reducer}>
            <div className="it-data-table">
                <div className="it-data-table-container">
                    <Table>
                        <Thead/>
                        <Rows />
                    </Table>
                </div>
            </div>
        </TableProvider>
    );
}
