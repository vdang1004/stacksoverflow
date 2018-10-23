import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GetSmarterPage from "./pages/GetSmarterPage";
import RapSheetPage from "./pages/RapSheetPage";
import NoMatch from "./pages/NoMatch";




const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signuppage" component={SignupPage} />
        <Route exact path="/getsmarterpage" component={GetSmarterPage} />
        <Route exact path="/rapsheetpage" component={RapSheetPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
