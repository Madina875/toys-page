import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import SubHeader from "./components/sub-header";
import Hero from "./components/hero";
import More from "./components/more";
import Watch from "./components/watch";

const App = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <main>
        <Hero />
        <Watch />
        <More />
      </main>
      <Footer />
    </>
  );
};

export default App;
