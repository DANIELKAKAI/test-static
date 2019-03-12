import React, { Component } from 'react';
import Info from './Info';
import DemoForm from './DemoForm';



export default class Employer extends Component {



  



  render() {
    return (
        <div>
   
        <section className="ftco-section services-section" style={{backgroundColor:'#ccdfff'}}>
        <div className="row justify-content-center">
              <h1 className="">What We Offer</h1>
            </div>
            <Info/>
            <DemoForm/>
        </section>
    
        </div>
    );
  }
}

