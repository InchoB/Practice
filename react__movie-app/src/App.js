import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import About from './routes/About';
import Navigation from './components/Navigation';
import './App.css';

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/movie-detail" component={Detail} /> */}
            <Route path="/movie/:id" component={Detail} />
            {/* <Route path="/home">
                <h1>Home</h1>
            </Route>
            <Route path="/home/introdution">
                <h1>Introdution</h1>
            </Route>
            <Route path="/about">
                <h1>About</h1>
            </Route> */}
        </HashRouter>
    );
}

export default App;
