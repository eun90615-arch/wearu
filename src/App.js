import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Tips from "./pages/Tips";
import Meals from "./pages/Meals";
import Home from "./pages/Home";
import MealsDetail from "./pages/MealsDetail";

function App() {
  return (
    <div className="wrap">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/meals" element={<Meals/>}/>
          <Route path="/meals/:id" element={<MealsDetail/>}/>
          <Route path="/tips" element={<Tips/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>

      <footer className="site-footer">
        <small>&copy; {new Date().getFullYear()}wearU</small>
      </footer>
    </div>
  );
}

export default App;
