import React, { Component } from 'react';

import icon4 from '../images/icon4.png';
import icon3 from '../images/icon3.png';
import icon2 from '../images/icon2.png';
import icon1 from '../images/icon1.png';
import './employer.css'



export default class Info extends Component {



    render() {
        return (

            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 d-flex align-self-stretch ">
                        <div className="media block-6 services d-block">
                            <div className="icon box" >
                                <img className="img-fluid" src={icon1} alt="icon4" width="250px" height="250px" />
                            </div>
                            <div className="media-body">
                                <h3 className="heading mb-3">APPLICANT TRACKING SYSTEM</h3>
                                <p>Replace labour-intensive spreadsheets with a modern applicant tracking system. Evaluate faster and hire great talent whilst simultaneously reducing costs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-self-stretch ">
                        <div className="media block-6 services d-block">
                            <div className="icon box">
                                <img className="img-fluid" src={icon3} alt="icon4" width="250px" height="250px" />
                            </div>
                            <div className="media-body">
                                <h3 className="heading mb-3">KAZIQUEST REFERRAL MANAGER</h3>
                                <p>Your employees can post your job openings on their own social networks. </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 d-flex align-self-stretch ">
                        <div className="media block-6 services d-block">
                            <div className="icon box" width="250px" height="250px">
                                <img className="img-fluid" src={icon4} alt="icon4" />
                            </div>
                            <div className="media-body">
                                <h3 className="heading mb-3">KAZIQUEST HRIS</h3>
                                <p>Everything you need to onboard new hires, manage and reward employees.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex align-self-stretch ">
                        <div className="media block-6 services d-block">
                            <div className="icon box"  >
                                <img className="img-fluid" src={icon2} alt="icon2" width="250px" height="250px" />
                            </div>
                            <div className="media-body">
                                <h3 className="heading mb-3">KAZIQUEST TALENT NETWORK</h3>
                                <p>KaziQuest puts you in touch with a large pool of job seekers which allows you to directly approach potential applicants. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}


