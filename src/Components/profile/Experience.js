import React, { Component } from 'react';
import { END_POINT } from '../Constants';



export default class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: props.categories,
            job_types: props.job_types,
            jobs: [{ 'id': 2, 'position': 'teller', 'job_type': 'part time', 'company': 'safaricom', 'date': 2017 },
            { 'position': 'developer', 'job_type': 'full time', 'company': 'helb', 'date': 2012 }],
            job_id: null, position: '', job_type: '', company: '', industry: '', companyhomepage: '',
            companyenddate: '', currentjob: false, jobdescription: '',  companystartdate: '',
            companySize: ''
        };
    }


    handleChange(e) {

        this.setState({ [e.target.name]: e.target.value });

    }


    deleteJob(id) {
        let jobs = this.state.jobs;
        let index = jobs.findIndex(x => x.id === id);
        jobs.splice(index, 1);
        this.setState({ jobs: jobs });
    }

    addJob() {


        if (this.state.position && this.state.job_type && this.state.company && this.state.companyenddate) {
            let job = { 'id': 2, 'position': this.state.position, 'job_type': this.state.job_type, 'company': this.state.company, 'date': this.state.companyenddate }
            let jobs = this.state.jobs;
            jobs.push(job);
            this.setState({ jobs: jobs });
            alert("Job added");

            this.clearJobForm();

            console.log(this.state);
        }
        else {
            alert("fill every field");
        }

        fetch(END_POINT+ 'add-experience', {
            method: 'post',
            body: {}
        })


    }

    clearJobForm() {

        this.setState({
            job_id: null, position: '', job_type: '', industry: '', companyhomepage: '',
            companyenddate: '', currentjob: '', jobdescription: '', company: '', companystartdate: '',
            companySize: ''
        })

    }

    handleSubmit(e) {
        e.preventDefault();
    }


    render() {

        let jobs = undefined;

        if (this.state.jobs !== []) {

            jobs = this.state.jobs.map(job =>
                <tr> <td>{job.position}</td> <td>{job.job_type}</td> <td>{job.company}</td> <td>{job.date}</td> <td><p style={{ color: '#FF0000' }} onClick={() => this.deleteJob(job.id)} className="bold"><span className="icon-delete"></span> delete</p></td> </tr>

            );

        }

        const job_types = this.state.job_types.map((data) =>

            <option value={data}>{data}</option>

        );

        const categories = this.state.categories.map((data) =>
           <option value={data}>{data}</option>
        );

        return (
            <div>

                <h2>Experience</h2>

                <table class="table table-striped">
                    <thead>
                        <tr> <th>Position</th> <th>Job Type</th> <th>Company</th> <th>Date</th> <th></th> </tr>
                        {jobs}
                    </thead>
                    <tbody>

                    </tbody>
                </table>



                <p className="bold"><span className="icon-plus"></span> Add Experience</p>
                <div className="row form-group">


                    <div className="col-md-4 mb-3 mb-md-0">


                        <label className="font-weight-bold" for="fullname">Position</label>
                        <input value={this.state.position} onChange={this.handleChange.bind(this)} type="text" name="position" className="form-control" placeholder="position" />


                        <label className="font-weight-bold" for="fullname">Job Type</label>
                        <select value={this.state.job_type} name="job_type" onChange={this.handleChange.bind(this)} className="form-control">
                            <option value="">Choose</option>
                            {job_types}
                        </select>


                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">

                        <label className="font-weight-bold" for="fullname">Company</label>
                        <input type="text" value={this.state.company} onChange={this.handleChange.bind(this)} name="company" className="form-control" placeholder="" />

                        <label className="font-weight-bold" for="fullname">Company size</label>
                        <select value={this.state.companySize} onChange={this.handleChange.bind(this)} name="companySize" className="form-control">
                            <option value="">Choose</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="501-1000">501-1,000 employees</option>
                            <option value="5001-10000">5,001-10,000 Employees</option>
                            <option value="10001">10,001 or more employees</option>

                        </select>

                    </div>

                    <div className="col-md-4 mb-3 mb-md-0">

                        <label className="font-weight-bold" for="fullname">Company homepage</label>
                        <input type="text" value={this.state.companyhomepage} onChange={this.handleChange.bind(this)} name="companyhomepage" className="form-control" placeholder="" />

                        <label className="font-weight-bold" for="fullname">Industry</label>
                        <select value={this.state.industry} onChange={this.handleChange.bind(this)} name="industry" className="form-control">
                            <option value="">Choose</option>
                            {categories}
                        </select>

                    </div>

                </div>

                <div className="row form-group">

                    <div className="col-md-4 mb-3 mb-md-0">

                        <label className="font-weight-bold" for="fullname">From</label>
                        <input type="date" value={this.state.companystartdate} onChange={this.handleChange.bind(this)}  name="companystartdate" id="fullname" className="form-control" placeholder="" />
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">

                        <label className="font-weight-bold" for="fullname">To</label>
                        <input type="date" value={this.state.companyenddate} onChange={this.handleChange.bind(this)} name="companyenddate" className="form-control" placeholder="" />
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">

                        <input type="radio" onChange={this.handleChange.bind(this)} name="currentjob" id="option-job-type-1" />
                        <label>Current Job</label>

                    </div>

                </div>

                <div className="row form-group">
                    <div className="col-md-12"><h4>Job Description</h4></div>
                    <div className="col-md-12 mb-3 mb-md-0">
                        <textarea value={this.state.jobdescription} onChange={this.handleChange.bind(this)} name="jobdescription" className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>
                </div>

                <div className="row form-group">
                    <div className="col-md-12 mb-3 mb-md-0">
                        <button onClick={this.addJob.bind(this)} className="btn btn-primary  py-2 px-5 float-left">Save</button>
                        <button onClick={this.clearJobForm.bind(this)} className="btn btn-danger  py-2 px-5 float-right">Cancel</button>
                    </div>
                </div>
            </div>

        );
    }
}