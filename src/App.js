import './App.scss';
import Landing from './views/Landing';
import PerfumesGrid from './views/PerfumesGrid';
import PerfumeInner from './views/PerfumeInner';
import NotFound from './views/NotFound';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (

<Router>
      
        <Routes>
          <Route path="/perfume-page/:id" element={<PerfumeInner/>} /> 
          <Route path="/all-perfumes" element={<PerfumesGrid/>} />
          <Route exact path="/" element={<Landing/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>

    </Router>
  );
}

export default App;
