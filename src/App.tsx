import React from 'react';
import Sets from './components/set-info/Sets';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SetSpoiler from './components/set-spoiler/SetSpoiler';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/set/:setId">
                    <SetSpoiler></SetSpoiler>
                </Route>
                <Route path="/">
                    <Sets></Sets>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
