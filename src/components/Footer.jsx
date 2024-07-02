import React from "react";

function Footer() {
    return(
        <div className="py-6 text-center">
            <p className="text-sm mt-2 opacity-50">
                Laura, clear out the rest of my day! -Princess Carolyn
            </p>
            <p className="text-sm mt-2 opacity-50">
                Last updated:{' '}
                <a 
                    href="https://github.com/FrancisSanB/FrancisSanB.github.io" target="_blank"
                    className="font-bold hover:underline underline-offset-2 decoration-2 decoration-red" rel="noreferrer noopener"
                >
                    July 2024
                </a>
            </p>
        </div>
    )
}

export default Footer;