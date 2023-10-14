import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" text-white >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" text-white >
            <a class="nav-link active text-white" aria-current="page" href="#"text-white ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#"></a>
          </li>
          <li class="nav-item dropdown">
            {/* <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             
            </a> */}
            <ul class="dropdown-menu" text-white >
              <li><a class="dropdown-item text-white" href="#" text-white></a></li>
              <li><a class="dropdown-item text-white" href="#"></a></li>
              <li></li>
              <li><a class="dropdown-item text-white" href="#"></a></li>
            </ul>
          </li>
          <li class="nav-item" text-white >
            <a class="nav-link disabled text-white" aria-disabled="true"></a>
          </li>
        </ul>
        <form class="d-flex" role="search" text-white>
        <a className="navbar-brand text-white fs-6 text">Home</a>
      <a className="navbar-brand text-white fs-6 text">About</a>
      <a className="navbar-brand text-white fs-6 text">Services</a>
      <a className="navbar-brand text-white fs-6 text">Contact us</a>
          {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success text-white" type="submit" text-white >Search</button> */}
        </form>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
