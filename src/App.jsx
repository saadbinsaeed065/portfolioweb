import { useContext } from "react";
import Contact from "./components/contact/Contact";
import { ThemeContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import "./App.css";
import Intro from "./components/intro/Intro";
import About from './components/about/About'
import Project from "./components/Project/Project";
import Nav from "./components/Nav";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      {/* <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact /> */}

      <Router>

<Grid container direction='column'>
        <div  >
        <Nav/>
       
        </div>

        <div >
        <Routes>
        <Route exact path='/home'   element={<Intro/>} />
        <Route path='/about'  element={<About/>} />
        <Route path='/contact'  element={<Contact/>} />
        <Route path='/project'  element={<Project/>} />
        {/* <Route path='signup'  element={<Signup/>} />
        <Route path='logout'  element={<Logout/>} /> */}
        {/* <Route path='/toggle'  element={<Toggle/>} /> */}
    
      </Routes>
     
        </div>
        </Grid>
 
  
 
    </Router>
    </div>
  );
};

export default App;
