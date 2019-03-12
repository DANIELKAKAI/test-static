import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'

class SearchBar extends Component{


	constructor(){
		super();
		this.state={
			keyword:'',
			location:'',
			category:''
		}
	}

	handleChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();

		//console.log(this.state)
		this.props.history.push(`/jobs/search/keyword=${this.state.keyword}/category=${this.state.category}/location=${this.state.location}/`);
			
  }
  



	

	render(){


		const categories = this.props.categories.map((data)=>
				<option value={data}>{data}</option>
		);

		

		return(

			<section className="ftco-section" style={{backgroundColor:'#ccdfff'}} >
      <div className="container">
            <h1 className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
						Find a <span style={{ color: '#0b3364' }}>Job</span>
						</h1>
						

						<div className="ftco-search">
							<div className="row">
		           
			          <div className="col-md-12 tab-wrap">
			            
			            <div className="tab-content p-4" id="v-pills-tabContent">

			              <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">

			              	<form onSubmit={this.handleSubmit.bind(this)} className="search-job">
			              		<div className="row">
			              			<div className="col-md">
			              				<div className="form-group">
				              				<div className="form-field">
				              					<div className="icon"><span className="icon-briefcase"></span></div>
								                <input type="text" name="keyword" onChange={this.handleChange.bind(this)} className="form-control" placeholder="eg. Job Title ,Keywords or Company"/>
								              </div>
							              </div>
			              			</div>
			              			<div className="col-md">
			              				<div className="form-group">
			              					<div className="form-field">
				              					<div className="select-wrap">
						                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
						                      <select onChange={this.handleChange.bind(this)} name="profession" id="" className="form-control">
																	<option value="">Category</option>
						                      	{categories}
						                      </select>
						                    </div>
								              </div>
							              </div>
			              			</div>
			              			<div className="col-md">
			              				<div className="form-group">
			              					<div className="form-field">
				              					<div className="icon"><span className="icon-map-marker"></span></div>
								                <input onChange={this.handleChange.bind(this)} name="location" type="text" className="form-control" placeholder="Location"/>
								              </div>
							              </div>
			              			</div>

													<div className="col-md">
                            <div className="form-group">
                              <div className="form-field">
																
                                <input type="submit" value="Search" className="form-control btn btn-primary"/>
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
      


			);
	}
}

export default withRouter(SearchBar);