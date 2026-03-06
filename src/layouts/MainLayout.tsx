import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;