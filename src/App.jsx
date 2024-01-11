import NavBar from './NavBar';
import { Route,Routes } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import './App.css'
import Contact from './Page/Contact';

function App() {
 return (
   <>
     <NavBar />
     
     <Routes>

     <Route exact path="/Home" element={ <Home />}>
      
     </Route>
     <Route path="/About" element={ <About />}>
      
     </Route>
     <Route path="/Contact" element={ <Contact />}>
      
     </Route>
     </Routes>
   </>
 );
}

export default App;