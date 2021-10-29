import "./App.css";
import Home from "./componants/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./componants/shared/Header/Header";
import Footer from "./componants/shared/Footer/Footer";
import Login from "./componants/Login/Login";
import Placeorder from "./componants/Placeorder/Placeorder";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivetRoute from "./componants/PrivetRoute/PrivetRoute";
import ScrollToTop from "./componants/ScrollToTop/ScrollToTop";
import MyPlans from "./componants/MyPlans/MyPlans";
import ManagePlans from "./componants/ManagePlans/ManagePlans";
import AddPlan from "./componants/AddPlan/AddPlan";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
          <ScrollToTop />
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

          <PrivetRoute path="/myplans">
            <MyPlans></MyPlans>
          </PrivetRoute>

          <PrivetRoute path="/manageplans">
            <ManagePlans></ManagePlans>
          </PrivetRoute>

          <PrivetRoute path="/manageplans">
            <AddPlan></AddPlan>
          </PrivetRoute>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
