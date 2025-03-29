import {Link} from "react-router-dom";

function Contact() {
    return (
        <div>
                <pre>
                    {
                        `Dalop Land, Xrusey World.
Maxug,Nigeria
20021,10
Boom`}
                </pre>
            <hr/>
            <Link to={"/"}>Go back to Home</Link>
        </div>
    );
}


export default Contact;