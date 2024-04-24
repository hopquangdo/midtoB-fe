import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="main-header">
        <Header />
      </div>
      <div className="flex-1">
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
