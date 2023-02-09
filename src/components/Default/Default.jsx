import React from "react";

const Default = () => {
  function loc() {
    if (localStorage.getItem("token")) {
      return null;
    } else {
      window.location.href = "/register ";
    }
  }
  loc();
  return <div>Default</div>;
};

export default Default;
