import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import NotFound from "../pages/notFound/NotFound";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="about" element={<PrivateRouter />}>
            <Route path="" element={<About />} />
          </Route>

          <Route path="/detail" element={<PrivateRouter />}>
            <Route path="" element={<Detail />} />
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
