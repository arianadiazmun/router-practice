import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Err404 from './pages/Err404';

function App() {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path= "/contact" element= {<Contact/>} />
    <Route path="/about" element= {<About/>}  />
    <Route path="/" element= { <Home />} />
    <Route path="*" element= {<Err404/>} />
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
