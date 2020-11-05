import React, { Component } from 'react'
import Axios from 'axios';

export class Users extends Component {

    constructor(props){
        super(props);
        this.state={
            UserList : []
        }
    }
    componentDidMount(){
        Axios.get('https://reqres.in/api/users')
        .then(res=>{
            console.log(res.data.data);
            this.setState({
                UserList : res.data.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render() {
        const data =this.state.UserList.map((user)=>
            <div className="card col-md-4 col-sm-12 col-xs-6" style={{width:'300px','margin-top':'50px','margin-bottom':'50px'}}>
                <img className="card-img-top" src={user.avatar} alt="Card image" style={{width:'100%'}}/>
                <div className="card-body">
                    <p className="card-text"><a href={"/userpage/"+user.id} >{user.email}</a></p>
                </div>
            </div>
        )
        return (
            <div className="container">
                <div className="row">
                    {data}
                </div>
            </div>
        )
    }
}

export default Users
