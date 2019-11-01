import React from 'react';
import './index.scss';

export default function PageLayout({ children }) {
    return (
        <div className="it__layout it__layout--shorter">
            {children}
        </div>
    );
}
