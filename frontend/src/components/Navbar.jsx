import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/reels">Reels</NavLink>
    </nav>
  );
};

export default Navbar;
