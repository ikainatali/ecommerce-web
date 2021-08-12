import { Switch, Route } from "react-router-dom";

//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Man from "./components/Man";
import Woman from "./components/Woman";
import Winter from "./components/Winter";
import Home from "./components/Home";

import Accessories from "./components/Accessories";
import Cart from "./components/Cart";

import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/man' component={Man}></Route>
        <Route exact path='/woman' component={Woman}></Route>
        <Route exact path='/winter' component={Winter}></Route>
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/accessories' component={Accessories}></Route>
        <Route exact path='/cart' component={Cart}></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
