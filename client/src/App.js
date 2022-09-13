import './App.css';
import Landing from './components/Landing/Landing'; 
import Nav from './components/NavBar/Nav';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import DietList from './components/DietList/DietList';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import RandomRecipe from './components/RandomRecipe/RandomRecipe';



import { Route, Switch } from "react-router-dom";

//import {loading} from '/store'

function App() {
const loading= true
  return (
    <div className="App">
      {
        (loading)?
        <Route exact path="/"><Landing/></Route>:
        <>
         <Nav/>
         <Switch>
        <Route exact path="/recipes"><Home/></Route>
        <Route exact path="/recipes/:idReceta"><Detail/></Route>
        <Route exact path="/recipes/create"><CreateRecipe/></Route>
        <Route exact path="/diets"><DietList/></Route>
        <Route exact path="/about"><About/></Route>
        <Route exact path="/recipe/random"><RandomRecipe/></Route>
        </Switch>
        <Footer/>
        </>
       
      }
    </div>
  );
}

export default App;
