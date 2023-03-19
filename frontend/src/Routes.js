import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SearchPage from './pages/Search';
import StaffPage from './pages/Staff';

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
                <Route path="/staffpage" >
                    <StaffPage />
                </Route>
            </Switch>
        </Router>
    )
}