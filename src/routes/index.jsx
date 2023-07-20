import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Calculator from '../pages/calculator/Calculator';
import Qoute from '../pages/qoute/Qoute';

const routes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/qoute" element={<Qoute />} />
  </Routes>
);

export default routes;
