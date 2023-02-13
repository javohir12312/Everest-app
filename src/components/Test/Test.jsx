import React from "react";

const Test = () => {
  function loc() {
    if (localStorage.getItem("token")) {
      return null;
    } else {
      window.location = "/login";
    }
  }
  loc();
  return <div>Test</div>;
};

export default Test;
