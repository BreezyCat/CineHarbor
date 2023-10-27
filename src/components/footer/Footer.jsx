import { Link } from 'react-router-dom';

import './footer.scss';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <>
      <div className='footer'>
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
              <Link to='/'>Horror</Link>
              <Link to='/'>Animation</Link>
              <Link to='/'>Fantasy</Link>
            </div>
            <div className='footer-content-menu'>
              <h3 className='footer-content-menu-title-genres'>Genres</h3>
              <Link to='/'>Action</Link>
              <Link to='/'>Sci-fi</Link>
              <Link to='/'>Romance</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copy'>
        <span>
          &copy; 2023 CineHarbor | Made by Griselda Valerie Michelle Benedicta
          and Ferry Daniel
        </span>
      </div>
    </>
  );
};

export default Footer;
