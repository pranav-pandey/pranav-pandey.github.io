import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/index";
import './App.css';
import Home from './pages/Home';

const App = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      main: () => <Home />
    }
  ]
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <Switch>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.main />
            </Route>
          ))}
      </Switch>
    </ThemeProvider>
  </Router>
    // <div className="App">
    //   <Header />
    //   <div style={{height: 2000, overflowY: 'scroll'}}>

    //   </div>
    // </div>
  );
}

export default App;
