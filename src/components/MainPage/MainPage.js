import React from 'react';
import DataTable from '../DataTable/DataTable';

const data = [
    ['Jordan Michael', '111-1111', 'to call', 'details'],
    ['Lebron James', '2444-2323', 'to recall', 'details'],
    ['Kevin Durant', '232-2141', 'unreachable', 'details'],
    ['Stephen Curry', '9111-1231', 'qualified', 'details'],
    ['Kobe Bryant', '91355-1231', 'refused', 'details'],
];

const headings = [
    'full name',
    'phone',
    'qualification status',
    'qualify',
];

export default function MainPage() {
    return (
        <DataTable headings={headings} data={data}/>
    );
}
