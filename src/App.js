import React from "react";
import About from "./components/about.component";
import AllInOne from "./components/allInOne.components";
import Footer from "./components/footer.component";
import Hero from "./components/hero.component";
import Navbar from "./components/navbar.component";
import Pricing from "./components/pricing.component";
import Support from "./components/support.component";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
