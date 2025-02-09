import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

const App = () => {
  return (
    <div>
      <Header title="This is the Header Title" />
      <Resume />
      <Footer />
    </div>
  );
};

export default App;
