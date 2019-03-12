import React, { Component } from 'react';




export default class ApplyButton extends Component{

    render(){

        if(this.props.applied){
            return(
                
                <a href="/job-post/" className="btn btn-success py-2 mr-1">Applied</a>
            );
        }
        else{
            return(
                
                <a href="/job-post/" className="btn btn-primary py-2 mr-1">Apply Job</a>
            );
        }

    }

}