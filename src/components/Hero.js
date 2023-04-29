import "./Hero.css";

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img className="home-bg" src={props.heroImg} alt="home-bg" />

                <div className="hero-text">
                    <p>{props.text}</p>
                    <h1>{props.title}</h1>
                    <a href={props.url} className={props.btnClass}>
                        {props.buttonText}
                    </a>
                </div>
            </div >
        </>
    );
}

export default Hero;