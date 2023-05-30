import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Header() {
    return (
        <header className="header bg-primary mb-3" id="header">
            <Navbar />
            <div className="header-container flex ai-c jc-c flex-d--c py-4">
                <h1 className="header-title h-main mb-3">
                Inhale the Good Sh<i className="fa-solid fa-cannabis header-title-alt" />t<br />
                Exhale the Bullsh<i className="fa-solid fa-cannabis header-title-alt" />t
                </h1>
                <a href="#about" className="btn btn-primary">Spark Up <i className="fa-solid fa-fire" /></a>
            </div>
        </header>
    )
}