import React from "react";

function Title({ children, id }) {
    return (
        <h1
            id={id && id}
            className="text-3xl font-garamond font-bold underline decoration-link dark:decoration-dark-link underline-offset-8 decoration-4 mb-3 text-normal dark:text-dark-normal"
        >
            {children}
        </h1>
    )
}

export default Title;