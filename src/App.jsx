import 'swiper/css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './index.scss';

import Router from './config/Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
