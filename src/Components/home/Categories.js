import React, { Component } from 'react';


export default class Categories extends Component {






  render() {

    const categories = this.props.categories.map((data) =>
      <div className="col-md-3">
        <ul className="category">
          <li><a href={"/jobs/category/"+data.replace(/\s/g,"-")}>{data} </a></li>

        </ul>
      </div>
    );

    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section text-center ">
              <span className="subheading">Categories work wating for you</span>
              <h2 className="mb-4"><span>Current</span> Job Posts</h2>
            </div>
          </div>
          <div className="row">
            {categories}

          </div>
        </div>
      </section>



    );
  }
}