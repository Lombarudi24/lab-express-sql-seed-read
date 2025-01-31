import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <div className="">
        <div className="">
          <h1 className="text-center mb-4">Welcome to Tuner</h1>
          <h4 className="text-center">
            Organized your songs playlist with Tuner
          </h4>
          <div className="text-center mt-4">
            <Link to="/songs" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
