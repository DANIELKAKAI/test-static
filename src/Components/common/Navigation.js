import React, { Component } from 'react';
import Logo from '../images/logo.png'
//import profile from '../images/person_1.jpg'
import { withRouter } from 'react-router-dom'
import history from './history'

class Navigation extends Component {


  updateLogin() {
    this.props.updateLogin(null);
    //localStorage.setItem('token',null);
    history.push('/');
  }


  render() {



    return (


      <nav className="navbar navbar-expand-lg bg-light fixed-top" id="ftco-navbar">

        

        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} width="115" height="30" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span>
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="/employer/" className="nav-link">Employer</a></li>

              <li className="nav-item"><a href="/jobs/" className="nav-link">Jobs</a></li>
            </ul>
          </div>
        </div>
      </nav>


    );
  }
}

export default withRouter(Navigation);