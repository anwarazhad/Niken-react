import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import homeBg from "../assets/homeBg.png";

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={homeBg}
                text="INNOVATIVE MIND"
                title="CHALLENGE THE IMPOSSIBLE"
                buttonText="Explore"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default Home;