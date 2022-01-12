import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Productpg from "./pages/Productpg";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return (
    

    <div className="App">
      <Router>
        <Routes>
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} /> 
              <Route exact path="/" element={<Home />} />
              <Route path="/product" element={<Productpg />} />
              <Route path="/cart" element={<Cart />} />
                
        </Routes>
      </Router>
    </div>
  );
}

export default App;
