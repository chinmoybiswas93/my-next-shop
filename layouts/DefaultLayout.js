import Header from "@/components/Header/Header";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="p-10">
        <div>{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
