import { Switch, Route, Redirect } from "react-router-dom";

//bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//components
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Winter from "./pages/Winter";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import Item from "./pages/Item";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>

        <Route exact path='/man'>
          <Man />
        </Route>

        <Route exact path='/woman'>
          <Woman />
        </Route>

        <Route exact path='/winter'>
          <Winter />
        </Route>

        <Route exact path='/home'>
          <Home />
        </Route>

        <Route exact path='/accessories'>
          <Accessories />
        </Route>

        <Route exact path='/item'>
          <Item />
        </Route>

        <Route exact path='/cart'>
          <Cart />
        </Route>

        <Redirect to='/'></Redirect>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
