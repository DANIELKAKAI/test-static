import React, { Component } from 'react';

class Footer extends Component {


  


render()
{
	return(

    
		 <footer className="ftco-footer ftco-bg-dark ftco-section" >
      <div className="container">
        <div className="row mb-5">
        	<div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About</h2>
              <p>KaziQuest is a Nairobi based startup that’s on a mission to provide companies with an all-round solution for their recruiting needs.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/KaziQuest"><span className="icon-twitter"></span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kaziquest/"><span className="icon-facebook"></span></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/kaziquest/"><span className="icon-linkedin"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Employers</h2>
              <ul className="list-unstyled">
                <li><a href="/employer" className="py-2 d-block">Request Demo</a></li>
                
              </ul>
            </div>
          </div>
          
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Contacts</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">Hazina Towers 13th floor </span></li>
	                <li><a href="https://kaziquest.com"><span className="icon icon-envelope"></span><span className="text">info@kaziquest.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div> 
        </div>
        
        </div>
      

    </footer>
    

		);
}

}

export default Footer;