import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

function Login() {
  return (
    <div>
      <h1>
        {" "}
        go to youtube{" "}
        <a href="https://www.youtube.com/" target="blank">
          {" "}
          <FaYoutube color="red"/>
        </a>
      </h1>
      <h1>login page</h1>
      <Link to="/signup">

        <button>signup</button>
      </Link>
    </div>
  );
}

export default Login;
