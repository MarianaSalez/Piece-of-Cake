import './App.css';
import { useSelector } from 'react-redux'
import Landing from './components/Landing/Landing';
import Nav from './components/NavBar/Nav';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
// import CreateRecipe from './components/CreateRecipe/CreateRecipe';
// import DietList from './components/DietList/DietList';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import RandomRecipe from './components/RandomRecipe/RandomRecipe';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const loading = useSelector((state) => state.loading)
  return (
    <>
    {
    (loading)?
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Landing />}/>
    </Routes>   
    </BrowserRouter>
    :
    <>
    
    <BrowserRouter >
    <Nav/>
    <Routes>
      
      <Route path="/recipes" element={<Home/>}/>
      <Route path="/recipes/random"element={<RandomRecipe/>}/> 
      <Route path="/recipes/:id"element={<Detail/>}/>
      <Route path="/about"element={<About/>}/>
    </Routes> 
    <Footer/>
    </BrowserRouter>
    
    </>

  }
  </>
   
    
    /* 
<>
        
        <Route path="/recipes/create"><CreateRecipe/></Route>
        <Route path="/diets"><DietList/></Route>
        <Route path="/about"><About/></Route>
         }
        </Routes>
 
        </>*/

  );
}

export default App;
