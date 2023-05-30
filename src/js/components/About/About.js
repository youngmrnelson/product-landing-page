import React from "react";

export default function About() {
    return (
        <section className="py-3 pi-1" id="about">
            <div className="container grid grid-gc--2 m-auto ai-c gap-3">
            <div className="section-container">
                <header className="secton-header">
                <h2 className="h-header ta-c">About</h2>
                <p className="h-main h-subheader ta-c mb-3">Up In Smoke</p>
                </header>
                <article className="section-article py-2">
                <p className="p-main">
                    This project is a product landing page with a header containing a
                    logo and a navigation bar with at least three clickable links.
                    Clicking on any of the links should take the user to the
                    corresponding section of the landing page. The landing page should
                    also have an embedded product video and a form for users to enter
                    their email address. The form should have HTML5 validation to
                    ensure that the entered text is an email address. When the user
                    clicks the submit button, their email should be submitted to a
                    static page.
                </p>
                </article>
            </div>
            <figure className="section-container">
                <iframe id="video" width={560} height={315} src="https://www.youtube.com/embed/U-bwa-ZfPPI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </figure>
            </div>
        </section>
    )
}