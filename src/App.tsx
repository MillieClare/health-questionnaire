import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Form />
    </div>
  );
}

export default App;
