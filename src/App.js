import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import About from './Components/About';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import Skills from './Skills';
import { createContext } from 'react';
import SKillsAboutnav from './SKillsAboutnav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contactus from './Components/ContactUs';
import View from './Components/View';
import Footer from './Components/Footer';


function App() {

 
  return (
 <>
    
      <BrowserRouter><Navigation></Navigation></BrowserRouter>
 
 <Home></Home>
 <Footer></Footer>
 





 </>
  );
}

export default App;

