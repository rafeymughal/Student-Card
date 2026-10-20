import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

function Navbar({ title, price }) {
    return (<div className="navbar">
     <Link to="/"><FaHome /></Link>
     <Link to="/login"><FaUserLarge /></Link>
     

    </div>)
}
export default Navbar;