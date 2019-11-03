import React, { createContext, useContext, useReducer } from 'react';

export const TableContext = createContext([]);
export const TableProvider = ({ reducer, initialState, children }) => (
    <TableContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </TableContext.Provider>
);
export const useStateValue = () => useContext(TableContext);
