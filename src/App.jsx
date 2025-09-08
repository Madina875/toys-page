import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import SubHeader from "./components/sub-header";
import Hero from "./components/hero";

const App = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default App;
