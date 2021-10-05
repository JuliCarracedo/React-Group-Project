import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navbar = () => (

  <nav>
    <div id="logo">
      <img id="planet-logo" alt="planet" src={logo} />
      <p>Space Traveler&apos;s Hub</p>
    </div>
    <div id="links">
      <NavLink activeStyle={{ color: 'red' }} exact to="/">Rockets</NavLink>
      <NavLink activeStyle={{ color: 'red' }} to="/missions">Missions</NavLink>
      <NavLink activeStyle={{ color: 'red' }} to="/profile"> My Profile </NavLink>
    </div>
  </nav>
);

export default Navbar;
