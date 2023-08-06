import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login/Login";

function App() {

  return (
    <Router basename="/" >
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </>

    </Router>
  );
}

export default App;
