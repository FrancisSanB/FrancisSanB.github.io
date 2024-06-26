import React from "react";

function Title({ children, id }) {
    return (
        <h1
            id={id && id}
            className="text-2xl font-bold underline decoration-red underline-offset-8 decoration-4 mb-3 text-stone-900"
        >
            {children}
        </h1>
    )
}

export default Title;