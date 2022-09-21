import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import About from "../pages/About";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter