import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Navbar = () => {
	return (<nav class="navbar bg-body-tertiary bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand text-white">Navbar</a>
      <form class="d-flex" role="search">
      <a className="navbar-brand text-white">Home</a>
      <a className="navbar-brand text-white">About</a>
      <a className="navbar-brand text-white">Services</a>
      <a className="navbar-brand text-white">Contact us</a>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
	
	);
};

export default Navbar;
