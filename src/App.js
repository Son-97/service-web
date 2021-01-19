import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonScrollOnTop from "./components/ButtonScrollOnTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Service";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={Services} />
      </Switch>
      <Footer />
      <ButtonScrollOnTop />
    </Router>
  );
}

export default App;
