import "./Hero.css";
import homeBg from "../assets/homeBg.png";

function Hero() {
    return (
        <>
            <div className="hero">
                <img src={homeBg} alt="homeBg" />

                <div className="hero-text">
                    <h1>INNOVATIVE MIND</h1>
                    <p>CHALLENGE THE IMPOSSIBLE</p>
                    <a href="/">
                        Explore
                    </a>
                </div>
            </div>
        </>
    );
}

export default Hero;