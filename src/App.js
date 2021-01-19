import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonScrollOnTop from "./components/ButtonScrollOnTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
      <ButtonScrollOnTop />
    </Router>
  );
}

export default App;
