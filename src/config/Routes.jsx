import { Route, Routes,useLocation } from 'react-router-dom';
import { useEffect } from "react";

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/detail/Detail';

const Router = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
    </Routes>
  );
};

export default Router;
