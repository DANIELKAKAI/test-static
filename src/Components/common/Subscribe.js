import React, { Component } from 'react';
import { END_POINT } from '../Constants';


export default class Subscribe extends Component {

  constructor(){
    super();
    this.state={
      email:''
    }
  }

  handleChange(e){
    this.setState({email:e.target.value});
  }



  handleSubmit(e){
    e.preventDefault();


    if(this.state.email){

    fetch(END_POINT+ 'subscribe',{
      method:'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',  
      },
      body:JSON.stringify({
        'email':this.state.email
      })
    }).then(res => res.json())
    .then((result)=>{
        console.log(result);
        if(result.state===1){
          alert(result.message)
        }
    },
    (error)=>{
        console.log(error);
    })
  }
  else{
      alert("fill email field");
  }

  }

  render() {

    return (
      <section className="ftco-section-parallax">
        <div className="parallax-img d-flex align-items-center">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7 text-center heading-section heading-section-white ">
                <h2>Subcribe to our Newsletter</h2>
                <p>Subcribe for daily job alerts from KaziQuest. It's all free! We promise no spam.</p>
                <div className="row d-flex justify-content-center mt-4 mb-4">
                  <div className="col-md-8">
                    <form onSubmit={this.handleSubmit.bind(this)}  className="subscribe-form">
                      <div className="form-group d-flex">
                        <input type="text" ref="email" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter email address" />
                        <input type="submit" value="Subscribe" className="submit px-3" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}