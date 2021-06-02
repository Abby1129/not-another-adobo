import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';
import Home from './pages';


function App() {

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
