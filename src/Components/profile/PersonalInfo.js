import React, { Component } from 'react';

import Pic from '../images/person_1.jpg';


export default class PersonalInfo extends Component{


    constructor(){
        super();
        this.state ={
            gender:'',
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            country:'',
            city:'',
            pic:Pic,
        }
    }
    

    handleChange(e){

        this.setState({[e.target.name]:e.target.value});
    
      }

      imageChange(e){
        this.setState({
          pic: URL.createObjectURL(e.target.files[0])
        })
      }

      updateProfile(){

        console.log(this.state)
      }


    handleSubmit(e) {
        e.preventDefault();
      }

    render(){

        return(

            <div className="container">
            <div classNameName="row">
              <div className="col-md-12 col-lg-8">
                <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Personal details</h1>
              </div>
  
            </div>
            <div className="row">
  
              <div className="col-md-12 col-lg-12 mb-5">
  
                <form onSubmit={this.handleSubmit.bind(this)} className="p-5 bg-white">
  
  
                  <div className="row form-group">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <img src={this.state.pic} width="150px" height="150px" alt="profile pic" />
  
                      <input type="file" name="pic" onChange={this.imageChange.bind(this)} placeholder="upload image" alt="Submit" />
                    </div>
  
                    <div className="col-md-4 mb-3 mb-md-0">
                      <label className="font-weight-bold" >Gender</label>
                      <select name="gender" onChange={this.handleChange.bind(this)} value={this.state.gender} className="form-control">
                        <option value="">Choose</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
  
  
                      </select>
  
                      <label className="font-weight-bold" >First name</label>
                      <input type="text" value={this.state.firstname} onChange={this.handleChange.bind(this)} name="firstname" className="form-control" placeholder="" />
                      <label className="font-weight-bold" >Last name</label>
                      <input type="text" value={this.state.lastname} onChange={this.handleChange.bind(this)} name="lastname" className="form-control" placeholder="" />
  
                    </div>
  
                    <div className="col-md-4 mb-3 mb-md-0">
  
                      <label className="font-weight-bold" >Email</label>
                      <input type="text" value={this.state.email} onChange={this.handleChange.bind(this)} name="email" className="form-control" placeholder="" />
  
                      <label className="font-weight-bold" >Phone</label>
                      <input type="number" value={this.state.phone} onChange={this.handleChange.bind(this)} name="phone" className="form-control" placeholder="" />
  
  
                      <label className="font-weight-bold" >City</label>
                      <input type="text" value={this.state.city} onChange={this.handleChange.bind(this)} name="city" className="form-control" placeholder="" />
  
                      <label className="font-weight-bold" >Country</label>
                      <input type="text" value={this.state.country} onChange={this.handleChange.bind(this)} name="country" className="form-control" placeholder="" />
  
                    </div>
  
                  </div>

                  <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <button onClick={this.updateProfile.bind(this)} className="btn btn-primary  py-2 px-5 float-right">Save</button>
                  </div>
                </div>
  
                </form>
                
              </div>

             
  
  
            </div>
            
          </div>
  

        );
    }
}