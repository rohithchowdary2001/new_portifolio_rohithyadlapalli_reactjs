import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Educationpage from "./components/Educational/Educationpage";
import Professionalpage from "./components/Professional/Professionalpage";
import Certification from "./components/Certification/Certification";
import Socialmedia from "./components/Socialmedia/Socialmedia";
import Menubar from "./components/Menu/Menubar";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
        <Menubar/>
      <Routes>
      <Route path="/" element={<Homepage />}/>
          <Route path="/education" element={<Educationpage />} />
          <Route path="/job-experience" element={<Professionalpage />} />
          <Route path="/certification" element={<Certification />} />
          <Route path='/social-media' element={<Socialmedia/>}/>
          <Route path="/skills" element={<Skills/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
