import './App.scss';
import Landing from './views/Landing';
import PerfumesGrid from './views/PerfumesGrid';
import PerfumeInner from './views/PerfumeInner';
import NotFound from './views/NotFound';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginModal from "./components/modals/LoginModal";

function App() {
  return (

<Router>
      
        <Routes>
          <Route path="/perfume-page/:id" element={<PerfumeInner/>} /> 
          <Route path="/all-perfumes" element={<PerfumesGrid/>} />
          <Route exact path="/" element={<Landing/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <LoginModal />
    </Router>
  );
}

export default App;
