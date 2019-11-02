export const SET_TABLE_REF = 'table/set_table_ref';
export const SET_CELL_HEIGHTS = 'table/set_cell_heights';

export function setTableRef(tableRef) {
    return {
        type: SET_TABLE_REF,
        tableRef,
    };
}

export function setCellHeights(cellHeights) {
    return {
        type: SET_CELL_HEIGHTS,
        cellHeights,
    };
}
