import React from 'react';
import Sets from './components/set-info/Sets';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SetSpoiler from './components/set-spoiler/SetSpoiler';
import NavBar from './components/nav-bar/NavBar';
import AppProvider from './contexts/AppProvider';

const App: React.FunctionComponent = (props) => {
    return (
        <Router>
            <AppProvider>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path="/set/:setId">
                        <SetSpoiler></SetSpoiler>
                    </Route>
                    <Route path="/">
                        <Sets></Sets>
                    </Route>
                </Switch>
            </AppProvider>
        </Router>
    );
};

export default App;
