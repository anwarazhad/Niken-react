import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeBg from "../assets/bg.jpg";

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={HomeBg}
                text="INNOVATIVE MIND"
                title="CHALLENGE THE IMPOSSIBLE"
                btnText="Explore"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default Home;