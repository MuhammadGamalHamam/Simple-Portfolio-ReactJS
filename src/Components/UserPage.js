import React, { Component } from 'react'
import Axios from 'axios';

export class UserPage extends Component {
    constructor(props){
        super(props);
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        Axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)
        .then(res=>{
           // console.log(res.data);
            this.setState({
                user : res.data.data
            })
        })
        .catch(err=>{
            console.log(err);
        });

    }

    render() {
        const UserData=this.state.user.phone
        console.log(UserData)
        return (
           <div className="container">
               <div className="row">
                    <div className="col-md-4"></div>
                    <div className="card col-md-4 col-sm-12" style={{width:'300px',margin:'20px'}}>
                        <img className="card-img-top" src={this.state.user.avatar} alt="Card image" style={{width:'100%'}}/>
                        <div className="card-body">
                            <h4 className="card-title">{this.state.user.first_name} {this.state.user.last_name}</h4>
                            <p className="card-text">{this.state.user.email}</p>
                        </div>
                    </div>
               </div>
           
            
           </div>
        );
    }
}

export default UserPage
