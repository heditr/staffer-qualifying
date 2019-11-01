import React from 'react';
import { TableProvider } from '../State';
import Thead from '../Thead/Thead';
import Rows from '../Rows/Rows';

const reducer = (state, action) => {
    console.log({ action });
    return state;
};

export default function Table({ headings, data }) {
    return (
        <TableProvider initialState={{ headings, data }} reducer={reducer}>
            <table>
                <Thead/>
                <Rows />
            </table>
        </TableProvider>
    );
}
