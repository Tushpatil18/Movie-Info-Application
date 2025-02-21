import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Favorites from "./Pages/Favorite";
// import MovieCards from "./Components/MovieCards";
import { MovieProvider } from "./contexts/MovieContext";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

function App() {
  // const Movienumber = 1;
  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
