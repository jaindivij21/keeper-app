import React from "react";

function Footer() {
    const currTime = new Date();
    const yr = currTime.getFullYear();
    return (
        <footer>
            <p>copyright ©️ {yr}</p>
        </footer>
    );
}

export default Footer;
