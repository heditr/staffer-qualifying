import React from 'react';
import Table from '../DataTable/Table/Table';

const data = [
    ['jordan', 'qualified'],
    ['jordan', 'qualified'],
    ['jordan', 'qualified'],
];

export default function MainPage() {
    return (
        <div>
            <Table headings={['name', 'qualify']} data={data}/>
        </div>
    );
}
