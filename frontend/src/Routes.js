import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import SearchPage from "./pages/Search";
import StaffPage from "./pages/Staff";
import StaffHome from "./pages/StaffHome";
import EditActivity from "./pages/EditActivity";
import NewActivity from "./pages/NewActivity";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/searchpage">
          <SearchPage />
        </Route>
        <Route path="/stafflogin">
          <StaffPage />
        </Route>
        <Route path="/staffhome">
          <StaffHome />
        </Route>
        <Route path="/editactivity">
          <EditActivity />
        </Route>
        <Route path="/newactivity">
          <NewActivity />
        </Route>
      </Switch>
    </Router>
  );
};
