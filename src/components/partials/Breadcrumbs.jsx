import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="breadcrumbs">
        <div
          className="page-header d-flex align-items-center"
          style={{ backgroundImage: "url('assets/img/page-header.jpg')" }}
        >
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>{props.pageTitle}</h2>
                {/* <p>
                  Odio et unde deleniti. Deserunt numquam exercitationem.
                  Officiis quo odio sint voluptas consequatur ut a odio
                  voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi
                  ratione sint. Sit quaerat ipsum dolorem.
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{props.pageTitle}</li>
            </ol>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Breadcrumbs;
