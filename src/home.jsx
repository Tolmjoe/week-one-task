import Header from "./Header.jsx"
import Intro from "./Intro.jsx"
import Footer from "./Footer.jsx";
import Cadate from "./Cadate.jsx";
import "./index.css"

function Home() {
    return(
        <>
            <Header/>
            <Intro/>
            <Cadate day="Sunny"/>
            <Footer/>
        </>
    )
}

export default Home;