import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import Jobs from './Jobs.js'
import Categories from './Categories.js'
import Subscribe from '../common/Subscribe.js'
//import UserInfo from './UserInfo.js';
import './home.css';




class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {

      categories: props.categories,
      job_types: props.job_types
    };
  }




  render() {
    return (

      <div>
        
        <SearchBar job_types={this.state.job_types} categories={this.state.categories} />
        <Jobs />
        <Categories categories={this.state.categories} />
        <Subscribe />
      
      </div>

    );
  }
}

export default Home;
