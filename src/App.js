import React, { Component } from 'react';

import NewJob from './Components/job/NewJob.js';
import SignUp from './Components/Signup.js';
import SignIn from './Components/SignIn.js';
import Home from './Components/home/Home.js';
import Employer from './Components/employer/Employer';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import JobPost from './Components/job/JobPost.js';
import JobsList from './Components/job/JobsList.js';
import SearchList from './Components/job/SearchList.js';
import CategoryList from './Components/job/CategoryList.js';
import Navigation from './Components/common/Navigation';
import Footer from './Components/common/Footer';
import PrivacyPolicy from './Components/common/PrivacyPolicy.js';
import {JOB_TYPES,CATEGORIES} from './Components/Constants'



class App extends Component {

  constructor() {
    super();

    const loadToken = () => {
      try {
        const token = localStorage.getItem('token');
        if (token === null) {
          return false;
        }
        return token;
      } catch (err) {
        return undefined
      }
    }

    this.removeToken = () => {
      try {
        const token = localStorage.removeItem('token');
        if (token === null) {
          return false;
        }
        return token;
      } catch (err) {
        return undefined
      }
    }


    
    this.state = {

      token:loadToken(),
      categories: CATEGORIES,
      job_types: JOB_TYPES

    };
  }

  updateLogin(auth){
      this.setState({
        token:auth
      });
      this.removeToken()

  }



  

  render() {

    



    return (
      <BrowserRouter>
<Switch>
    
        <div>
          <Navigation updateLogin={this.updateLogin.bind(this)} token={this.state.token} />
          <Route exact path="/" component={()=> <Home categories={this.state.categories} job_types={this.state.job_types} />} />
          <Route exact path="/signup" component={()=> <SignUp updateLogin={this.updateLogin.bind(this)} />} />
          <Route exact path="/signin" component={()=> <SignIn updateLogin={this.updateLogin.bind(this)} />} />
          <Route exact path="/employer" component={()=> <Employer/>} />
          <Route exact path="/privacy-policy" component={()=> <PrivacyPolicy/>} />
          <Route path="/job-post/:id-:title?" render={(props) => <JobPost {...props} categories={this.state.categories} />} />
          <Route path="/jobs/category/:category/" render={(props)=><CategoryList {...props} />}/>
          <Route path="/jobs/search/keyword=:keyword?/category=:category?/location=:location?/" render={(props)=><SearchList  {...props} />}/>
          <Route exact path="/jobs/" render={(props)=><JobsList {...props} />}/>
          <Route path="/new-job" component={() => <NewJob categories={this.state.categories} token={this.state.token} job_types={this.state.job_types} />}/>
          <Footer/>
        </div>
    
</Switch>
</BrowserRouter>


    );
  }
}

export default App;
