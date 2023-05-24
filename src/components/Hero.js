import "./Hero.css";

function Hero(props) {

    return (
        <>

            <div className={props.cName}>
                <img alt="Home-Background" src={props.heroImg} />


                <div className="hero-text">
                    <h1>{props.text}</h1>
                    <p>{props.title}</p>
                    <a href={props.url} className={props.btnClass}>
                        {props.btnText}
                    </a>
                </div >

            </div>
        </>
    );
}

export default Hero;