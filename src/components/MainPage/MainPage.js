import React, { useState, useEffect } from 'react';
import DataTable from '../DataTable/DataTable';
import { Options, Select } from '../SelectOptions/SelectOptions';

const options = [
    'to call',
    'to recall',
    'unreachable',
    'qualified',
    'refused',
];

const data = [
    ['Jordan Michael', '111-1111', 'to call'],
    ['Lebron James', '2444-2323', 'to recall'],
    ['Kevin Durant', '232-2141', 'unreachable'],
    ['Stephen Curry', '9111-1231', 'qualified'],
    ['Kobe Bryant', '91355-1231', 'refused'],
];

const headings = [
    'full name',
    'phone',
    'qualification status',
    'qualify',
];

function setDefaultValues(items) {
    const values = items.reduce(
        (acc, item, index) => ({ ...acc, [`select${index}`]: item[2] }),
        {},
    );

    console.log({ values });

    return values;
}

export default function MainPage() {
    const [pageState, setPageState] = useState({});

    useEffect(() => {
        console.log('use effect', pageState);
        setPageState(setDefaultValues(data));
    }, []);

    const dataRender = data
        .map((arr, indexData) => {
            const newArr = arr.map((d, index) => {
                if (index === 2) {
                    const selectName = `select${indexData}`;
                    return (
                        <Select
                            name={selectName}
                            value={pageState[selectName]}
                            handleChange={(name, value) => setPageState({ ...pageState, [name]: value })}>
                            <Options options={options} />
                        </Select>
                    );
                }

                return d;
            });
            return newArr;
        });
    return (
        <DataTable headings={headings} data={dataRender}/>
    );
}
