import React from "react";
import { Link } from "react-router-dom";

const ScrollUp = () => {
  return (
    <>
      <Link
        to="#"
        class="scroll-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </Link>
    </>
  );
};

export default ScrollUp;
