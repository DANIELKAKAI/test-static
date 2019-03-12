import React, { Component } from 'react';


export default class Services extends Component{

	render(){

		return(

			  <section className="ftco-section services-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 d-flex align-self-stretch ">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-resume"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Search Millions of Jobs</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-collaboration"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Easy To Manage Jobs</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex align-self-stretch ">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-promotions"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Top Careers</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ">
            <div className="media block-6 services d-block">
              <div className="icon"><span className="flaticon-employee"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Search Expert Candidates</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>

			

			);
	}
}