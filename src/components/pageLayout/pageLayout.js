import React from "react";
import "./index.scss";

export default function PageLayout({children}) {
    return (
        <div className="it it__layout">
            {children}
        </div>
    )
}
