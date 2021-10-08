import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navbar = () => (

  <nav>
    <div id="logo">
      <img id="planet-logo" alt="planet" src={logo} />
      <p className="space-traveler">Space Traveler&apos;s Hub</p>
    </div>
    <div id="links">
      <NavLink className="navlink" activeStyle={{ textDecoration: 'underline' }} exact to="/">Rockets</NavLink>
      <NavLink className="navlink" activeStyle={{ textDecoration: 'underline' }} to="/missions">Missions</NavLink>
      <NavLink className="navlink" activeStyle={{ textDecoration: 'underline' }} to="/profile"> My Profile </NavLink>
    </div>
  </nav>
);

export default Navbar;
