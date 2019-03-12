import React, { Component } from 'react';


export default class UserInfo extends Component {

    render() {



        return (

            <section className="ftco-section-parallax" >
                <div className="parallax-btn d-flex align-items-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 heading-section heading-section-white">
                                <h2 style={{ color: '#def3fa' }}>LOOKING FOR WORK ?</h2>
                                <p>Browse thousands of job listed on Kaziquest. Apply for jobs free. There's something
                                    for everyone
                                </p>

                            </div>

                            <div className="col-md-4">

                                <a href="/signup/" className="btn btn-light btn-lg" >Sign Up</a>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
        );
    }

}