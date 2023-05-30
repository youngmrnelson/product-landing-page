import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Signup from "./components/Signup/Signup";
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <div>
            <Header />
            <About />
            <Signup />
            <Footer />
        </div>
    )
}