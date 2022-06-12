
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import{Routes ,Route} from 'react-router-dom';


import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';

function App() {
  
  return (
    <>
    <Navbar/>

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/services" element={<Services/>} />

      {/* <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/services' component={Services}></Route> */}
    </Routes>
    </>
  );
}

export default App;
