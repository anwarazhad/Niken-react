import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                text="INNOVATIVE MIND"
                title="CHALLENGE THE IMPOSSIBLE"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default Home;