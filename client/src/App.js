import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ErrorLoginPage from "./pages/ErrorLoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import GetSmarterPage from "./pages/GetSmarterPage";
import RapSheetPage from "./pages/RapSheetPage";
import NoMatch from "./pages/NoMatch";
import piggyBank from "./pages/piggyBank";
import goodKarma from "./pages/goodKarma";




const App = () => (

  

  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/errorloginpage" component={ErrorLoginPage} />
        <Route exact path="/signuppage" component={SignupPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/getsmarterpage" component={GetSmarterPage} />
        <Route exact path="/piggyBankpage" component={piggyBank} />
        <Route exact path="/goodKarmapage" component={goodKarma} />
        <Route exact path="/rapsheetpage" component={RapSheetPage} />
        <Route component={NoMatch} />
        
      </Switch>
    </div>
  </Router>
);



export default App;
