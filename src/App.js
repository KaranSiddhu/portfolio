import React from "react";
import { About, Footer, Header, Project, Skills } from "./containers";
import { Navbar } from "./components";
import { QueryClient, QueryClientProvider } from "react-query";

import "./App.scss";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  </QueryClientProvider>
);

export default App;
