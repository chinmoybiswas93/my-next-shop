import Header from "@/components/Header/Header";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </>
  );
};

export default DefaultLayout;
