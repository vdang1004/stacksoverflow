import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import GetSmarterPage from "./pages/GetSmarterPage";
import NoMatch from "./pages/NoMatch";
import piggyBank from "./pages/piggyBank";
import goodKarma from "./pages/goodKarma";




const App = () => (

  

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signuppage" component={SignupPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/getsmarterpage" component={GetSmarterPage} />
        <Route exact path="/piggyBankpage" component={piggyBank} />
        <Route exact path="/goodKarmapage" component={goodKarma} />
        <Route component={NoMatch} />
        
      </Switch>
    </div>
  </Router>
);



export default App;
