// src/App.js
import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md">
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
