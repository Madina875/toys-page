import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import SubHeader from "./components/sub-header";
import Hero from "./components/hero";
import More from "./components/more";
import Watch from "./components/watch";
import Webflow from "./components/webflow";
import Available from "./components/available";
import Subscribe from "./components/subscribe";

const App = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <main>
        <Hero />
        <Watch />
        <Webflow />
        <Available />
        <Subscribe />
        <More />
      </main>
      <Footer />
    </>
  );
};

export default App;
