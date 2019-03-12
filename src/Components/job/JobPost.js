import React, { Component } from 'react';
import { END_POINT } from '../Constants';
import { Markup } from 'interweave';
import  '../../static/css/ionicons.min.css'
import  '../../static/css/flaticon.css'
import  '../../static/css/icomoon.css'

export default class JobPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: props.categories,
            email: '',
            job: {},
            id: props.match.params.id,
            search: ''
        }
    }

    componentWillMount() {
        fetch(END_POINT + 'select-job', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'id': this.state.id
            })
        })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                if (result.state === 1) {
                    this.setState({ job: result.result[0] })
                }
            },
                (error) => {

                })
    }


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    handleSubscribe(e) {
        e.preventDefault();


        if (this.state.email) {

            fetch(END_POINT + 'subscribe', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'email': this.state.email
                })
            }).then(res => res.json())
                .then((result) => {
                    console.log(result);
                    if (result.state === 1) {
                        alert(result.message)
                    }
                },
                    (error) => {
                        console.log(error);
                    })
        }
        else {
            alert("fill email field");
        }

    }


    handleSearch(e) {
        e.preventDefault();


        if (this.state.search) {

            this.props.history.push(`/jobs/search/keyword=${this.state.search}/category=/location=/`);

        }
        else {
            alert("fill field");
        }

    }




    render() {

        console.log(this.state)

        const categories = this.state.categories.map((data) =>
            <li><a href={"/jobs/category/" + data.replace(/\s/g, "-")}>{data}</a></li>
        );

        const twitter = {
            backgroundColor: '#38A1F3',
            color: '#ffffff'
        }

        const facebook = {
            backgroundColor: '#3b5998',
            color: '#ffffff'
        }
        const whatsapp = {
            backgroundColor: '#25D366',
            color: '#ffffff'
        }

        const data = {
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            "title": this.state.job.title,
            "description": this.state.job.description,
            "identifier": {
                "@type": "PropertyValue",
                "name": this.state.job.company_name,
                "value": this.state.job.company_name
            },
            "datePosted": "2019-03-09",
            "validThrough": "2019-03-30T00:00",
            "employmentType": "FULL_TIME",
            "hiringOrganization": {
                "@type": "Organization",
                "name": this.state.job.company_name,
                "sameAs": "https://kaziquest.com/"
            },
            "jobLocation": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": this.state.job.location,
                    "addressLocality": this.state.job.location,
                    "addressRegion": "KE",
                    "postalCode": "00100",
                    "addressCountry": "KE"
                }
            },
            "baseSalary": {
                "@type": "MonetaryAmount",
                "currency": "KES",
                "value": {
                    "@type": "QuantitativeValue",
                    "minValue": this.state.job.lowest_salary,
                    "maxValue": this.state.job.highest_salary,
                    "unitText": "MONTH"
                }
            }
        };




        return (
            <div>

                <script type="application/ld+json">
                {JSON.stringify(data)}
                </script>



                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 ">
                                <h1 className="mb-3">{this.state.job.title}</h1>
                                <div><span className="icon-home"></span> <span>{this.state.job.company_name}</span></div>
                                <div>
                                    <span className="icon-my_location"></span> <span>{this.state.job.location}</span></div>
                                <div>
                                    <span className="bold">Salary Range:</span> <span>{this.state.job.lowest_salary} - {this.state.job.highest_salary}</span>

                                </div>
                                <div>
                                    <span className="bold"> Contract Type:</span> <span>{this.state.job.job_type}</span>
                                </div>


                                <h2 className="mb-3">Description</h2>

                                <Markup content={this.state.job.description} />


                                <h2 className="mb-3">Job requirements</h2>

                                <Markup content={this.state.job.requirements} />






                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="float-right">

                                            <div className="tagcloud">
                                                Share Job:
                                                <a style={whatsapp} href={"whatsapp://send?text=https://kaziquest.com" + this.props.location.pathname} className="tag-cloud-link"><span className="icon-whatsapp"></span>Whatsapp</a>
                                                <a style={facebook} href={"https://www.facebook.com/sharer.php?u=https://kaziquest.com" + this.props.location.pathname} className="tag-cloud-link"><span className="icon-facebook"></span> Facebook</a>
                                                <a style={twitter} href={`https://twitter.com/share?url=https://kaziquest.com${this.props.location.pathname}&text=${this.state.job.title}`} className="tag-cloud-link"><span className="icon-twitter"></span>Twitter</a>

                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                            <div className="col-md-4 sidebar bg-light">
                                <div className="sidebar-box">
                                    <form onSubmit={this.handleSearch.bind(this)} className="search-form">
                                        <div className="form-group">
                                            <span className="icon icon-search"></span>
                                            <input type="text" onChange={this.handleChange.bind(this)} name="search" className="form-control" placeholder="Type a keyword and hit enter" />
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-box ">
                                    <div className="categories">
                                        <h3>Categories</h3>
                                        {categories}
                                    </div>
                                </div>





                                <div className="sidebar-box subscribe-box">
                                    <h3>Get Daily Job Alerts</h3>
                                    <p>Subcribe for daily job alerts from KaziQuest. It's all free! We promise no spam.</p>
                                    <form onSubmit={this.handleSubscribe.bind(this)} className="search-form">
                                        <div className="form-group">

                                            <span className="icon icon-email"></span>
                                            <input type="text" name="email" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter Email" />

                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Subscribe" className="btn btn-primary px-3" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>

        );
    }


};