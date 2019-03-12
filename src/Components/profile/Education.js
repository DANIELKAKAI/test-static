import React, { Component } from 'react';


export default class Education extends Component {

  constructor() {
    super();

    this.state = {
      field: '',
      school: '',
      certification: '',
      from: '',
      to: '',
      subjects: '',
      education: [{ 'id': 3, 'field': 'physics', 'school': 'jkuat', 'certification': 'undergraduate', 'to': 2010 },
      { 'id': 5, 'field': 'engineering', 'school': 'uon', 'certification': 'undergraduate', 'to': 2009 }]
    }
  }


  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value });

  }

  deleteEducation(id) {
    let education = this.state.education;
    let index = education.findIndex(x => x.id === id);
    education.splice(index, 1);
    this.setState({ education: education });
  }

  addEducation() {

    if (this.state.field && this.state.subjects && this.state.school && this.state.certification && this.state.from && this.state.to) {

      let school = { 'id': 5, 'field': this.state.field, 'school': this.state.school, 'certification': this.state.certification, 'to': this.state.to }
      let education = this.state.education;
      education.push(school);
      this.setState({ education: education });

      alert("saved");
      this.clearForm();
    }
    else {
      alert("fill all fields");
    }

    console.log(this.state);
  }

  clearForm() {

    this.setState({
      field: '',
      school: '',
      certification: '',
      from: '',
      to: '',
      subjects: '',
    });

  }






  render() {

    let schools = undefined;

    if (this.state.education !== []) {

      schools = this.state.education.map(school =>
        <tr> <td>{school.field}</td> <td>{school.school}</td> <td>{school.certification}</td> <td>{school.to}</td> <td><p style={{ color: '#FF0000' }} onClick={() => this.deleteEducation(school.id)} className="bold"><span className="icon-delete"></span> delete</p></td> </tr>

      );

    }


    return (


      <div>
        <h2>Education</h2>
        <table class="table table-striped">
          <thead>
            <tr> <th>Field of Study</th> <th>School</th> <th>Certification</th> <th>Date</th> <th></th> </tr>
          </thead>
          <tbody>
            {schools}
          </tbody>
        </table>
        <p className="bold"><span className="icon-plus"></span> Add Education</p>

        <div className="row form-group">


          <div className="col-md-4 mb-3 mb-md-0">
            <label className="font-weight-bold" for="fullname">Field Of Study</label>
            <input type="text" value={this.state.field} name="field" onChange={this.handleChange.bind(this)} className="form-control" placeholder="" />
          </div>


          <div className="col-md-4 mb-3 mb-md-0">
            <label className="font-weight-bold" for="fullname">School</label>
            <input type="text" value={this.state.school} name="school" onChange={this.handleChange.bind(this)} className="form-control" placeholder="" />
          </div>


          <div className="col-md-4 mb-3 mb-md-0">
            <label className="font-weight-bold" for="fullname">Certification</label>
            <input type="text" value={this.state.certification} name="certification" onChange={this.handleChange.bind(this)} className="form-control" placeholder="" />
          </div>
        </div>

        <div className="row form-group">


          <div className="col-md-4 mb-3 mb-md-0">
            <label className="font-weight-bold" for="fullname">From</label>
            <input type="date" name="from" value={this.state.from}  onChange={this.handleChange.bind(this)} className="form-control" placeholder="" />
          </div>


          <div className="col-md-4 mb-3 mb-md-0">
            <label className="font-weight-bold" for="fullname">To</label>
            <input type="date" name="to" value={this.state.to} onChange={this.handleChange.bind(this)} className="form-control" placeholder="" />
          </div>



        </div>
        <div className="row form-group">
          <div className="col-md-12"><h4>Specialized subjects</h4></div>
          <div className="col-md-12 mb-3 mb-md-0">
            <textarea value={this.state.subjects} onChange={this.handleChange.bind(this)} name="subjects" className="form-control" id="" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-12 mb-3 mb-md-0">
            <button onClick={this.addEducation.bind(this)} className="btn btn-primary  py-2 px-5 float-left">Save</button>
            <button onClick={this.clearForm.bind(this)} className="btn btn-danger  py-2 px-5 float-right">Cancel</button>
          </div>
        </div>
      </div>


    );
  }
}