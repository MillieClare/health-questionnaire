import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
