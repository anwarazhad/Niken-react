import "./Hero.css";
import Granim from "granim";
import { useEffect } from "react";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function Hero(props) {

    useEffect(() => {
        new Granim({
            element: "#logo-canvas",
            direction: "diagonal",
            opacity: [1, 1],
            states: {
                "default-state": {
                    gradients: [
                        ["#573c78", "#384569"],
                        // ["#bdc3c7", "#2c3e50"],
                        // ["#7b4397", "#dc2430"],
                        // ["#ffd89b", "#19547b"],
                    ],
                    transitionSpeed: 5000,
                },
            },
        });
    }, []);

    return (
        <>
            <div className="bloc-logo">
                <canvas id="logo-canvas" />
            </div>

            <div className="hero-text">
                <h1>{props.text}</h1>
                <p>{props.title}</p>
                <KeyboardDoubleArrowDownIcon href={props.url} className={props.btnClass} >
                </KeyboardDoubleArrowDownIcon>
            </div >
        </>
    );
}

export default Hero;