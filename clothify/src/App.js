import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Productpg from "./pages/Productpg";


function App() {
  return (
    

    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />

          <Route path="/product" element={<Productpg />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
