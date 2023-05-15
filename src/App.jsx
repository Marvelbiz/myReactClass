import Products from "./components/products";
import Home from "./components/home";
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";


function App(){
      return(
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
        </div>
      )
}


export default App;