import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Educationpage from "./components/Educational/Educationpage";
import Professionalpage from "./components/Professional/Professionalpage";
import Socialmediapage from "./components/Socialmediapage/Socialmediapage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />}/>
          <Route path="/education" element={<Educationpage />} />
          <Route path="/contact" element={<Professionalpage />} />
          <Route path="/socialmedia" element={<Socialmediapage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
