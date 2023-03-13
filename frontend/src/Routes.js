import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import SearchPage from './pages/Search';


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
            </Switch>
        </Router>
    )
}