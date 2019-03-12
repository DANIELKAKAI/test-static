import React, { Component } from 'react';
import {withRouter } from 'react-router-dom'
import { END_POINT } from '../Constants';
import { Editor } from '@tinymce/tinymce-react';
import history from '../common/history'




class NewJob extends Component {

	constructor(props) {
		super(props);

		this.state = {
			job_types: props.job_types,
			token:props.token,
			job_type:'',
			requirements:'',
			description:'',
			highest_salary:'0',
			lowest_salary:'0',
			status:1,
			experience:'',
			company:'',
			location:'',
			category:'',
			job_title:''
		}
		this.handleEditorChange = this.handleEditorChange.bind(this);
		this.handleEditorChange2 = this.handleEditorChange2.bind(this);
	}

	handleEditorChange(content) {
    this.setState({ description:content });
    //console.log(content)
  }

  handleEditorChange2(content) {
    this.setState({ requirements:content });
    //console.log(content)
  }


	handleChange(e){

		this.setState({[e.target.name]:e.target.value});
	
	  }
		
	  

	handleSubmit(e) {
		e.preventDefault();

		console.log(this.state)
		

		if (this.state.category && this.state.job_title && this.state.job_type && this.state.company && this.state.requirements && this.state.description  && this.state.status && this.state.experience) {
			fetch(END_POINT+ 'post-job', {
				method: 'POST',
				body: JSON.stringify({
					'title':this.state.job_title,
					'profession':this.state.category,
					'job_type': this.state.job_type,
					'requirements':this.state.requirements,
					'description':this.state.description,
					'highest_salary':this.state.highest_salary.toString(),
					'lowest_salary':this.state.lowest_salary.toString(),
					'status':this.state.status,
					'experience':this.state.experience,
					'location':this.state.location,
					'company_name':this.state.company
				}),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'Authorization':this.state.token

				}
			}).then(res => res.json())
				.then(
					(result) => {
						console.log(result);
						if(result.state===1){
							alert(result.message)
						}
						else{
							alert("error")
						}
					},
					(error) => {
						console.log(error);
					}

				);
		}
		else{
			alert("fill all fields")
		}



	}

	render() {

		 

		if(this.state.token==null){
			history.push('/signin');
		}
	

		const job_types = this.props.job_types.map(data =>

			<option value={data}>{data}</option>
		);

		const categories = this.props.categories.map(data =>

			<option value={data}>{data}</option>
		);

		return (


			<div className="ftco-section bg-light">
				<div className="container">

					<div className="row">

						<div className="col-md-12 col-lg-8 mb-5">


							<form onSubmit={this.handleSubmit.bind(this)} className="p-5 bg-white">
								<div className="row form-group">
									<h2>New Job</h2>
								</div>


								<div className="row form-group">
									<div className="col-md-12 mb-3 mb-md-0">
										<label className="font-weight-bold" >Job Title</label>
										<input type="text" onChange={this.handleChange.bind(this)} name="job_title" className="form-control" placeholder="eg. Professional UI/UX Designer" />
									</div>
								</div>

								<div className="row form-group mb-5">
									<div className="col-md-12 mb-3 mb-md-0">
										<label className="font-weight-bold" >Company</label>
										<input type="text" onChange={this.handleChange.bind(this)} name="company" className="form-control" placeholder="eg. Facebook, Inc." />
									</div>
								</div>

								<div className="row form-group">


									<div className="col-md-12 mb-3 mb-md-0">
										<label className="font-weight-bold" >Location</label>
										<input type="text" onChange={this.handleChange.bind(this)} name="location" className="form-control" placeholder="Kenya" />
									</div>
								</div>

								<div className="row form-group">

									<div className="col-md-12 mb-3 mb-md-0">

										<label className="font-weight-bold" >Experience</label>
										<input type="number" onChange={this.handleChange.bind(this)} name="experience" className="form-control" placeholder="1" />
									</div>
								</div>

								<div className="row form-group">

									<div className="col-md-6 mb-3 mb-md-0">

										<label className="font-weight-bold" >Min salary</label>
										<input type="number" onChange={this.handleChange.bind(this)} name="lowest_salary" className="form-control" placeholder="0" />
									</div>

									<div className="col-md-6 mb-3 mb-md-0">

										<label className="font-weight-bold" >Max salary</label>
										<input type="number" onChange={this.handleChange.bind(this)} name="highest_salary" className="form-control" placeholder="0" />
									</div>

								</div>




								<div className="row form-group">
									<div className="col-md-12 mb-3 mb-md-0">

										<label className="font-weight-bold" >Job Type</label>
										<select onChange={this.handleChange.bind(this)} name="job_type" className="form-control">

										<option value="">Choose</option>
											{job_types}

										</select>

									</div>

								</div>


								<div className="row form-group">
									<div className="col-md-12 mb-3 mb-md-0">

										<label className="font-weight-bold" >Category</label>
										<select onChange={this.handleChange.bind(this)} name="category" className="form-control">
			
										<option value="">Choose</option>
											{categories}

										</select>

									</div>

								</div>



								<div className="row form-group">
									<div className="col-md-12"><h3>Job Description</h3></div>
									<div className="col-md-12 mb-3 mb-md-0">
									<Editor value={this.state.description} onEditorChange={this.handleEditorChange} />
									</div>
								</div>

								<div className="row form-group">
									<div className="col-md-12"><h3>Job Requirements</h3></div>
									<div className="col-md-12 mb-3 mb-md-0">
										<Editor value={this.state.requirements} onEditorChange={this.handleEditorChange2} />
									
									</div>
								</div>

								<div className="row form-group">
									<div className="col-md-12">
										<input type="submit" value="Post" className="btn btn-primary  py-2 px-5" />
									</div>
								</div>


							</form>
						</div>


						<div className="col-lg-4">
							<div className="p-4 mb-3 bg-white">
								<h3 className="h5 text-black mb-3">Contact Info</h3>
								<p className="mb-0 font-weight-bold">Address</p>
								<p className="mb-4">13th floor, Hazina towers</p>

								<p className="mb-0 font-weight-bold">Email Address</p>
								<p className="mb-0"><a href="/"><span className="__cf_email__">info@kaziquest.com</span></a></p>

							</div>


						</div>
					</div>
				</div>
			</div>






		);
	}
}


export default withRouter(NewJob);