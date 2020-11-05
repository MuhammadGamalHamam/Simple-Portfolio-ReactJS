import React, { Component } from 'react'

export class Header extends Component {
    
    render() {
        
        return (
            <nav className="navbar navbar-expand-md bg-secondary navbar-light">
                <a className="navbar-brand" href="/" style={{color:'white' , fontWeight:'bolder'}}>ReactJS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="/" style={{color:'white', fontWeight:'bolder'}}> &ensp; Home &emsp;</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/users" style={{color:'white', fontWeight:'bolder'}}> &ensp;   Users &emsp;</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="/contact" style={{color:'white', fontWeight:'bolder'}}> &ensp;   Contact Us &emsp;</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about" style={{color:'white', fontWeight:'bolder'}}> &ensp;   About Us &emsp;</a>
                        </li> 
                        
                        
                    </ul>
                </div>  
          </nav>
        );
    }
}

export default Header
