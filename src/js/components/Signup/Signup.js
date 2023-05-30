import React from "react";
import image1 from '../../../assets/images/section-img-1.jpg'

export default function Signup() {
    return (
        <section className="py-3 pi-1" id="smoke">
            <div className="container grid grid-gc--3 m-auto ai-c gap-3">
            <header className="grid-span--full">
                <h2 className="h-header ta-c">Your Turn</h2>
                <p className="h-main h-subheader ta-c mb-3">Puff Puff Pass</p>
            </header>
            <figure className="section-img-container">
                <img src={image1} alt="THC infused tea" className="img" />
            </figure>
            <div className="section-container">
                <form action="https://www.freecodecamp.com/email-submit" id="form" className="form ta-c">
                <p className="p-main mb-3">
                    A friend with weed is a friend indeed! Sign up to receive news
                    about the latest news in the cannibis industry.
                </p>
                <label htmlFor="email" className="p-main">Email:
                    <input type="email" name="email" id="email" placeholder="Enter your email address" className="p-1 mb-2 disp-block m-auto" required /></label>
                <input type="submit" defaultValue="Submit" className="btn btn-primary m-auto" id="submit" />
                </form>
            </div>
            <figure className="section-img-container">
                <img src={image1} alt="THC infused tea" className="img" />
            </figure>
            </div>
        </section>
    )
}