import React, { Component } from 'react'

export class NotFoundPage extends Component {
    render() {
        const style={
           height: '400px',
           padding: '22%'
        };
        return (
            <div style={style}>
                
                <h1 className="bg-warning" >Page Not Found</h1>
                
            </div>
        )
    }
}

export default NotFoundPage
