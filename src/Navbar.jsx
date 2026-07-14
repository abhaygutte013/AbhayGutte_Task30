import { NavLink } from "react-router-dom";
function Navbar(){
  return(
    <nav className="navbar">
      <div className="logo">
        <img src="./public/logo.jpg" alt="logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>
      </div>
      <div className="nav-buttons">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink to="/signup">
          <button>Sign Up</button>
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
