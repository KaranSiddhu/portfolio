import React from "react";
import { About, Footer, Header, Project, Skills } from "./containers";
import { Navbar } from "./components";

import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Project />
    <Skills />
    <Footer />
  </div>
);

export default App;
