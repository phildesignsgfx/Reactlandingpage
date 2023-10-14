import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SmallCards = () => {
	return (<div class="row row-cols-1 row-cols-md-4 g-4 m-4">
    <div class="col">
      <div class="card">
        <img src="https://picsum.photos/500/325?random=1" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Find out more</a>
    </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://picsum.photos/500/325?random=2" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Find out more</a>
    </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://picsum.photos/500/325?random=3" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Find out more</a>
    </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <img src="https://picsum.photos/500/325?random=4" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Find out more</a>
    </p>
        </div>
      </div>
    </div>
  </div>
	
	);
};

export default SmallCards;