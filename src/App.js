import "./App.css";
import Home from "./componants/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./componants/shared/Header/Header";
import Footer from "./componants/shared/Footer/Footer";
import Login from "./componants/Login/Login";
import Placeorder from "./componants/Placeorder/Placeorder";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivetRoute from "./componants/PrivetRoute/PrivetRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/Login">
            <Login></Login>
          </Route>

          <PrivetRoute path="/placeorder/:id">
            <Placeorder></Placeorder>
          </PrivetRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
