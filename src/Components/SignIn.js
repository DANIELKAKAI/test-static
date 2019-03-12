import React, { Component } from 'react';
//import  { Redirect } from 'react-router-dom';
import {withRouter } from 'react-router-dom'
import { END_POINT } from './Constants';
import history from './common/history'


class SignIn extends Component {

  constructor(){
    super();
    this.state={
      'email':'',
      'password':''
    }
  }


  handleChange(e){

    this.setState({[e.target.name]:e.target.value});

  }


  handleSubmit(e){
      
    
      fetch(END_POINT+'login', {
        method: 'POST',
        body: JSON.stringify({ 
          'email': this.state.email,
          'password':this.state.password,
        }),
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          
        }
      }).then(res => res.json())
      .then(
        (result)=>{
          console.log(result);
          if(result.state===1){
            this.props.updateLogin("Bearer "+result.success.token);
            //localStorage.setItem('token',"Bearer "+result.success.token);
            history.push('/');
          }
          else if(result.state===0){
            alert(result.message);
          }
        },
        (error)=>{
          console.log(error);
        }

      );

    

    e.preventDefault();
  }

 


  render() {

    return (

      <div>

        <section className="ftco-section" style={{ backgroundColor: '#c5cbd6' }} >
          <div className="container">

            <div className="ftco-search">


              <div className="row justify-content-center">

                <div className="col-md-4 tab-wrap">

                  <div className="tab-content p-4" id="v-pills-tabContent">

                    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">

                      <form onSubmit={this.handleSubmit.bind(this)} className="search-job">

                        <div className="col-md-12 mb-4 text-center ">
                          <h2 className="h3">Sign In</h2>
                        </div>


                        <div className="row" style={{ marginTop: 10 }}>

                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-briefcase"></span></div>
                                <input name="email" onChange={this.handleChange.bind(this)} type="text" className="form-control" placeholder="Email" />
                              </div>
                            </div>
                          </div>
                        </div>




                        <div className="row" style={{ marginTop: 10 }}>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-map-marker"></span></div>
                                <input name="password" onChange={this.handleChange.bind(this)} type="password" className="form-control" placeholder="password" />
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="row" style={{ marginTop: 10 }}>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <input type="submit" value="Sign In" className="form-control btn btn-primary" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row justify-content-center" style={{ marginTop: 10 }}>
                          <p>Don't Have an Account ?<a href="/signup">Sign Up</a></p>
                        </div>

                      </form>
                    </div>




                  </div>


                </div>
              </div>
            </div>





          </div>

        </section>

      </div>


    );
  }
}

export default withRouter(SignIn);