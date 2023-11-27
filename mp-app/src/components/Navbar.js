import { Link } from "react-router-dom";
function Navbar() {
    return (
      <div>
        <Link to="/">Home </Link>
        <Link to="/Greetings.js">Greeting </Link>
        <Link to="/Books.js">Books </Link>
      </div>
    );
  };

  export default Navbar;