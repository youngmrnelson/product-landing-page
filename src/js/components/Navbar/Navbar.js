import React from "react";

export default function Navbar() {
    return (
        <nav className="nav py-0" id="nav-bar">
            <div className="container bg-primary m-auto grid grid-gc--3 ai-c jc-3 gap-3">
                <a href="index.html" className="nav-logo h-main p-1 ta-c">Up In Smoke
                <span className="nav-logo--alt"><i className="fa-solid fa-joint" /></span></a>
                <ul className="nav-links flex gap-3 jc-c">
                    <li><a href="index.html" className="nav-link p-1">Home</a></li>
                    <li><a href="#about" className="nav-link p-1">About</a></li>
                    <li><a href="#smoke" className="nav-link p-1">Smoke</a></li>
                </ul>
                <ul className="nav-links-ext flex gap-3 jc-c">
                    <li>
                        <a href="https://www.linkedin.com/in/daniel-nelson-9151a6212/" target="_blank" className="nav-link p-1"><i className="fa-brands fa-linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/youngmrnelson" target="_blank" className="nav-link p-1"><i className="fa-brands fa-github" />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}