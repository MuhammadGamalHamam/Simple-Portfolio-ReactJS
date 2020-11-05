import React, { Component } from 'react'

export class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            MobileNumber:'+201555333183',
            Email:'Mohamed.G.Moahmed@outlook.com'
        }
    }
    render() {
        const style={
            height: '400px',
            'margin-top':'100px'
         };
        return (
            <div className="container" style={style}>
                
                <div className="card bg-success">
                    <div className="card-body text-center">
                        <p className="card-text"> <h1>Email</h1><h2>{this.state.Email}</h2></p>
                        <p className="card-text"> <h1>Mobile Number</h1><h2>{this.state.MobileNumber}</h2></p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Contact
