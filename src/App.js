import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Products from "./components/products";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar  />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/products" element={<Products/>}/>
        
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <div className=" mt-8">
        <Footer />
      </div >
    </div>
  );
}

export default App;
