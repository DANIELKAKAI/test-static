import React, { Component } from 'react';
import dashboard from '../images/dashboard.png';

import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import {END_POINT} from '../Constants'




export default class DemoForm extends Component {

  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      company: '',
      companysize: '',
      message: '',
      privacy: ''
    }
  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value });

  }

  submit(e) {
    e.preventDefault();

    if (this.state.firstname && this.state.lastname && this.state.email && this.state.phone && this.state.company && this.state.companysize && this.state.message && this.state.privacy) {

      fetch(END_POINT+ 'request-demo', {
        method: 'POST',
        body: JSON.stringify({
          'title': 'Demo request',
          'email': this.state.email,
          'first_name': this.state.firstname,
          'last_name': this.state.lastname,
          'phone_number': this.state.phone,
          'company': this.state.company,
          'company_size': this.state.companysize,
          'message': this.state.message
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',

        }
      }).then(res => res.json())
        .then(
          (result) => {
            //console.log(result);
            if (result.state === 1) {

              alert("Request Approved, we will contact you")
            }

          },
          (error) => {
            console.log(error);
          }

        );

    }
    else {
      alert("fill all fields")
    }
  }




  openPopupbox() {
    const content = <img className="img-fluid" src={dashboard} alt="dashboard" />

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Dashboard Sample'
        },
        fadeIn: true,
        fadeInSpeed: 500
      }
    })
  }



  render() {
    return (


      <div className="container">

        <PopupboxContainer />
        <div className="row d-flex justify-content-center">

          <div  className="col-md d-none d-md-block">
          <a className="image-popup" href={dashboard}>  
            <img className="img-fluid" src={dashboard} alt="dashboard" />
            </a>
          </div>

          <div className="col-md d-flex">

            <form onSubmit={this.submit.bind(this)} className="bg-white p-5 contact-form">
              <div className="col-md-12 mb-4 ">
                <h2 className="h3">Request a Demo now</h2>
                <p>Discover KaziQuest’s full suite of solutions. And learn in your live demo why our platform is essential for your business.</p>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">

                    <input type="text" name="firstname" onChange={this.handleChange.bind(this)} className="form-control" placeholder="First Name" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" name="lastname" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Last Name" />
                  </div>
                </div>

              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">

                    <input type="email" name="email" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Email" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">

                    <input type="number" name="phone" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Phone Number" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">

                    <input type="text" name="company" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Company" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">

                    <div className="select-wrap">
                      
                      <select name="companysize" onChange={this.handleChange.bind(this)} className="form-control">
                        <option value="">Company Size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1,000 employees</option>
                        <option value="5001-10000">5,001-10,000 Employees</option>
                        <option value="10001">10,001 or more employees</option>

                      </select>
                    </div>
                  </div>
                </div>
              </div>




              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea name="message" onChange={this.handleChange.bind(this)} cols="30" rows="7" className="form-control" placeholder="Message"></textarea>

                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">

                    <label for="option-job-type-1">
                      <input type="checkbox" onChange={this.handleChange.bind(this)} name="privacy" />
                      I hereby confirm that I have read the <a href="/privacy-policy">Privacy Policy.</a>
                    </label>
                  </div>
                </div>
              </div>


              <div className="row justify-content-center" >
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="form-field">
                      <input type="submit" value="Request Demo" className="form-control btn btn-primary" />
                    </div>
                  </div>
                </div>
              </div>


            </form>

          </div>
        </div>


      </div>




    );
  }
}


