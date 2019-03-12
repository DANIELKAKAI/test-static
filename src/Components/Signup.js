import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'
import {END_POINT} from './Constants'


class SignUp extends Component {

  constructor(){
    super();
    this.state={
      email:'',
      role:'job-seeker',
      name:'',
      password:'',
      c_password:''
    }
  }

  handleChange(e){

    this.setState({[e.target.name]:e.target.value});

  }


  handleSubmit(e) {



    if (this.passwordCheck(this.state.password, this.state.c_password)) {




      fetch(END_POINT+'register', {
        method: 'POST',
        body: JSON.stringify({
          'email': this.state.email,
          'role': this.state.role,
          'name': this.state.name,
          'password': this.state.password,
          'c_password': this.state.c_password
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',

        }
      }).then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            if(result.state===1){
              this.props.updateLogin(null);
              alert("Account created")
            }
            else if(result.state===0){
              let res = result.message.email ? result.message.email: result.message.password;
              alert(res);
            }
          },
          (error) => {
            console.log(error);
          }

        );

    }
    else{
      alert("passwords don't match");
    }

    e.preventDefault();
  }

  passwordCheck(pass1, pass2) {
    return (pass1 === pass2)
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
                          <h2 className="h3">Sign Up</h2>
                        </div>

                        <div className="row" style={{ marginTop: 10 }}>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-user"></span></div>
                                <input type="text" onChange={this.handleChange.bind(this)} name="name" className="form-control" placeholder="Name" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row" style={{ marginTop: 10 }}>

                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-briefcase"></span></div>
                                <input type="text" onChange={this.handleChange.bind(this)} name="email" className="form-control" placeholder="Email" />
                              </div>
                            </div>
                          </div>
                        </div>



                        <div className="row" style={{ marginTop: 10 }}>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-map-marker"></span></div>
                                <input type="password" onChange={this.handleChange.bind(this)} name="password" className="form-control" placeholder="password" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row" style={{ marginTop: 10 }}>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <div className="icon"><span className="icon-map-marker"></span></div>
                                <input type="password" onChange={this.handleChange.bind(this)} name="c_password" className="form-control" placeholder="repeat password" />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row" style={{ marginTop: 10 }}>
                          <div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
                                <input type="submit" value="Sign Up" className="form-control btn btn-primary" />
                              </div>
                            </div>
                          </div>
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

export default withRouter(SignUp);
