import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const Consultation: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default Consultation;
