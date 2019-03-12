import React, { Component } from 'react';
import { END_POINT } from '../Constants';
//import ApplyButton from './ApplyButton';
//import LikeButton from './LikeButton';
import {Markup} from 'interweave';


export default class JobList extends Component {

    constructor() {
        super();
        this.state = {
            title: 'search results',
            jobs: [],
            currentPage: 1,
            JobsPerPage: 10

        }
        this.myRef = React.createRef()
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        let location = this.props.match.params.location ? this.props.match.params.location : '';
        let keyword = this.props.match.params.keyword ? this.props.match.params.keyword : '';
        let category = this.props.match.params.category ? this.props.match.params.category : '';


        fetch(END_POINT+'search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'keyword': keyword.toString(),
                'location': location.toString(),
                'profession': category.toString()
            })
        }).then(res => res.json())
            .then((result) => {
                //console.log(result);
                if (result.state === 1) {
                    this.setState({ jobs: result.results.reverse() })
                }
            },
                (error) => {
                    console.log(error);
                })
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
        this.scrollToMyRef();
    }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

    render() {

        //console.log(this.state)

        const { jobs, currentPage, JobsPerPage } = this.state;

        // Logic for displaying Jobs
        const indexOfLastJob = currentPage * JobsPerPage;
        const indexOfFirstJob = indexOfLastJob - JobsPerPage;
        const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(jobs.length / JobsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    className="active"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}

                </li>


            );
        });



        const renderJobs = currentJobs.map(job =>


            <div className="col-md-12 ">

                <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">

                    <div className="mb-4 mb-md-0 mr-1">
                        <div className="job-post-item-header d-flex align-items-center">
                            <h2 className="mr-3 text-black h3">{job.title}</h2>

                        </div>

                        <div className="job-post-item-body d-md-flex d-block">

                            <p><Markup content={job.description.slice(0,150)} /></p>
                        </div>

                        <div className="job-post-item-body d-block d-md-flex">

                            <div className="mr-3"><span className="icon-layers"></span><span className="bold">{job.company_name}</span></div>
                            <div className="mr-3"><span className="icon-my_location"></span> <span className="bold">{job.location}</span></div>
                            <div className="mr-3"><span>Type: </span> <span className="bold">{job.job_type}</span></div>

                        </div>
                    </div>

                    <div className="ml-auto d-flex">
                        <a href={"/job-post/" + job.id + "-" + job.title.replace(/\s/g, "-")} className="btn btn-primary py-2 mr-1">Apply Job</a>
                        <a href="/" className="btn btn-secondary rounded-circle btn-favorite d-flex align-items-center icon">
                            <span className="icon-heart"></span>
                        </a>
                    </div>
                </div>
            </div>

        );

        return (


            <section className="ftco-section" style={{ backgroundColor: '#ccdfff' }} ref={this.myRef}>
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ">
                            <h2 className="mb-4">{this.state.title}</h2>
                        </div>
                    </div>
                    <div className="row">

                        {renderJobs}


                    </div>
                    <div className="row mt-5">
                        <div className="col text-center">
                            <div className="block-27">
                                <ul>
                                    {renderPageNumbers}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}