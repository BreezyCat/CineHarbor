import { Link } from 'react-router-dom';

import './footer.scss';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div
      className='footer'>
      <div className='footer-content container'>
        <div className='footer-content-menus'>
        <div className='footer-content-logo'>
          <div className='logo'>
            <img
              src={logo}
              alt=''
            />
            <Link to='/'>CineHarbor</Link>
          </div>
        </div>
          <div className='footer-content-menu'>
            <h3 className='footer-content-menu-title'>Menus</h3>
            <Link to='/'>Home</Link>
            <Link to='/movie'>Movies</Link>
            <Link to='/tv'>Series</Link>
          </div>
          <div className='footer-content-menu'>
            <h3 className='footer-content-menu-title'>Genres</h3>
            <Link to='/horror'>Horror</Link>
            <Link to='/animation'>Animation</Link>
            <Link to='/fantasy'>Fantasy</Link>
          </div>
          <div className='footer-content-menu'>
            <h3 className='footer-content-menu-title-genres'>Genres</h3>
            <Link to='/action'>Action</Link>
            <Link to='/sci-fi'>Sci-fi</Link>
            <Link to='/romance'>Romance</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
