import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonScrollOnTop from "./components/ButtonScrollOnTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/service" exact component={Services} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/contact-us" exact component={Contact} />
      </Switch>
      <Footer />
      <ButtonScrollOnTop />
    </Router>
  );
}

export default App;
