import Hero from "../components/Hero";
import Navbar from "../components/Navbar"

function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1584731830441-d485c50e0ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                text="INNOVATIVE MIND"
                title="CHALLENGE THE IMPOSSIBLE"
                btnText="Explore More"
                url="/"
                btnClass="show"
            />
        </>
    )
}

export default Home;