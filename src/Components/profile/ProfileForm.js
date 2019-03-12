import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import AdditionalInfo from './AdditionalInfo';



export default class ProfileForm extends Component {

  constructor(props) {
    super(props);

    this.state = {

      categories: props.categories,
      job_types: props.job_types,
      jobs: [{ 'id': 2, 'position': 'teller', 'career': 'part time', 'company': 'safaricom', 'date': 2017 },
      { 'position': 'developer', 'career': 'full time', 'company': 'helb', 'date': 2012 }],
      education: [{ 'id': 3, 'field': 'physics', 'school': 'jkuat', 'certification': 'undergraduate', 'date': 2010 },
      { 'field': 'engineering', 'school': 'uon', 'certification': 'undergraduate', 'date': 2009 }],
      job: { 'id': null, 'position': null, 'career': null, 'company': null, 'date': null }
    };
  }

   

  handleSubmit(e) {
    e.preventDefault();
  }




  render() {

  

    return (



      <div className="ftco-section" style={{ backgroundColor: '#c5cbd6' }}>

       <PersonalInfo/>

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Resume</h1>

            </div>

          </div>
          <div className="row">

            <div className="col-md-12 col-lg-12 mb-5">

              <form onSubmit={this.handleSubmit.bind(this)} className="p-5 bg-white">

                <Experience categories={this.state.categories} job_types={this.state.job_types} />

                <Education/>

                <AdditionalInfo categories={this.state.categories} job_types={this.state.job_types} />

              </form>
            </div>


          </div>
        </div>
      </div>


    );
  }

}