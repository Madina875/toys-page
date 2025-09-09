import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import SubHeader from "./components/sub-header";
import Hero from "./components/hero";
import More from "./components/more";

const App = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <main>
        <Hero />
        <More />
      </main>
      <Footer />
    </>
  );
};

export default App;
