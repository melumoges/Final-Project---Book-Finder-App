import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookProvider } from "./context/BookContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import Favorites from "./pages/Favorites.jsx";
import './App.css';


function App() {
  return (
    <BookProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
