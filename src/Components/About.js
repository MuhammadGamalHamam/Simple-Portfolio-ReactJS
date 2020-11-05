import React, { Component } from 'react'

export class About extends Component {
    render() {
        const style={
            margin:'350px'
        }
        return (
            <div className="row" style={style}>
                <div className=" col-md-5 col-xs-12 col-sm-12">
                <img src={require('./Images/9MonthProgram.png')} /> 
                </div>      
            </div>
        )
    }
}

export default About
