import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
