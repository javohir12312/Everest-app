import React from "react";

const Test = () => {
  function loc() {
    if (localStorage.getItem("token")) {
      return null;
    } else {
      window.location.href = "/register ";
    }
  }
  loc();
  return <div>Test</div>;
};

export default Test;
