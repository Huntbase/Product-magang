import React from "react";
import Navbar from "../Navbar&Footer/Navbar.js";
import Marketlist from "../Daftar/Marketlist.js";
import Footer from "../Navbar&Footer/Footer.js";
import "../Home/css/App.css";

const isi = () => {
  return (
    <>
      <Navbar />
      <Marketlist />
      <Footer />
    </>
  );
};

export default isi;
