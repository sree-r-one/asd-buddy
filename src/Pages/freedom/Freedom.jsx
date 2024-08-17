import React from "react";
import { Outlet } from "react-router-dom";

const Freedom = () => {
  return (
    <div>
      <h1>Freedom Main Section</h1>
      <p>This is the main content for the Freedom section.</p>
      <Outlet />{" "}
      {/* This is where the nested route content (like Freedom1) will be rendered */}
    </div>
  );
};

export default Freedom;
