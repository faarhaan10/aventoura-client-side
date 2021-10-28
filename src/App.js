import "./App.css";
import Home from "./componants/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./componants/shared/Header/Header";
import Footer from "./componants/shared/Footer/Footer";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
