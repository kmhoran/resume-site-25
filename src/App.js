import React from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Biography from "./components/Biography";
import Contact from "./components/Contact";

import DetailPageLayout from "./Layouts/DetailPageLayout";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route element={<DetailPageLayout />}>
          <Route path="/experience" element={<Experience />} />
          <Route path="/bio" element={<Biography />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
