import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About Me</Link></li>
            <li><Link to={"/contact"}>Contact Me</Link></li>
            <li><Link to={"/portfolio"}>Portfolio</Link></li>
        </ul>

        </>
    );
}


export default Header;