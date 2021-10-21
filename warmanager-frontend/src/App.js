import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';
import React from 'react';



function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  } 

  return (
    <div className="wrapper">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
