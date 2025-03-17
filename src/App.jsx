import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./ui/common/Navbar/Navbar";
import Home from "./ui/pages/home/Home";
import SearchResults from "./ui/pages/SearchResults/SearchResults";
import Flash from "./ui/section/Flashsale/Flash";
import Category from "./ui/section/Category/Category";
import Selling from "./ui/section/Selling/Selling";
import Music from "./ui/section/Music/Music";
import OurProduct from "./ui/section/OurProduct/Index";
import Featured from "./ui/section/Featured/Featured";
import Testimonials from "./ui/section/Testimonials/Testimonials";
import Footer from "./ui/common/Footer/Footer";
import HomeDetailPage from "./ui/pages/HomeDetailspage/HomeDetailpage";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} />
   

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/search" element={<SearchResults />} />
  <Route path="/search/:id" element={<SearchResults />} />
  <Route path="/Articles/:id" element={<HomeDetailPage />} /> 
</Routes>

      <Flash />
      <Category />
      <Selling />
      <Music />
      <OurProduct />
      <Featured />
      <Testimonials />
      <Footer />
    </Router>
  );
}

export default App;

