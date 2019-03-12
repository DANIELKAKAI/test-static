import React, { Component } from 'react';




export default class ApplyButton extends Component{

    render(){

        if(this.props.liked){
            return(
                <a href="/" className="btn btn-danger rounded-circle btn-favorite d-flex align-items-center">
                            <span className="icon-heart"></span>
                        </a>
            );
        }
        else{
            return(
                <a href="/" className="btn btn-secondary rounded-circle btn-favorite d-flex align-items-center">
                            <span className="icon-heart"></span>
                        </a>
            );
        }
        
    }

}