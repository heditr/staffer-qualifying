import React from 'react';
import './index.scss';

export default function Cell({
    content,
    header,
    fixed,
    height,
}) {
    const fixedClass = fixed ? ' it-table-cell--fixed' : '';
    const headerClass = header ? ' it-table-cell--header' : '';
    const className = `it-table-cell${fixedClass}${headerClass}`;
    const style = height ? { height: `${height}px` } : undefined;
    const cellMarkup = header ? (
        <th className={className} style={style}>
            {content}
        </th>
    ) : (
        <td className={className} style={style}>
            {content}
        </td>
    );

    return (cellMarkup);
}
