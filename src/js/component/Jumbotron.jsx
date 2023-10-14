import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
	return ( <div className="jumbotron m-5 bg-secondary-subtle">
    <h1 className="display-4 fw-medium">A Warm Welcome</h1>
    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   
    <p></p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
    </p>
  </div>

	
	);
};

export default Jumbotron;