import React, { Component } from 'react'

export class Footer extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const  style={
            backgroundColor:"Grey",
            color:"White",
            text_align:"center",
            padding:'10px',
            'font-size':'20px'
        };
        return (
            <div style={style} className="container">
                <footer>
                    &copy;copyright 2020, Mohamed Gamal
                </footer>
            </div>
        );
    }
}

export default Footer
