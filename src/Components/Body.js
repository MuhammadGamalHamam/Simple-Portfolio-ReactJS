import React, { Component } from 'react'

export class Body extends Component {
    
    constructor(props) {
        super(props); 
    }

    
    render() {
        
        return(
            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" style={{height:'500px'}}>
                        <div className="carousel-item active">
                        <a href="https://reactjs.org/docs/getting-started.html" target="_blank"><img src={require('./Images/ReactJS.png')} className="d-block w-100" alt="..." style={{width:'100%',height:'500px'}}/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1> </h1>
                                <h2><a href="https://reactjs.org/docs/getting-started.html" target="_blank" className="btn btn-primary">Learn Now</a></h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <a href="https://angular.io/docs" target="_blank"><img src={require('./Images/Angular.png')} className="d-block w-100" alt="..." style={{width:'100%',height:'500px'}}/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1> </h1>
                                <h2><a href="https://angular.io/docs" target="_blank" className="btn btn-primary">Learn Now</a></h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="https://vuejs.org/v2/guide/" target="_blank"><img src={require('./Images/VueJS.png')} className="d-block w-100" alt="..." style={{width:'100%',height:'500px'}}/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h1> </h1>
                                <h2><a href="https://vuejs.org/v2/guide/" target="_blank" className="btn btn-primary">Learn Now</a></h2>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <h1> </h1>
                <div className="card-columns row" >
                    <div className="card col-md-4 col-sm-12" style={{width:'300px',margin:'20px'}}>
                        <img className="card-img-top" src={require('./Images/MohamedGamal.jpg')} alt="Card image" style={{width:'100%'}}/>
                        <div className="card-body">
                            <h4 className="card-title">Mohamed Gamal </h4>
                            <p className="card-text">Mohamed.G.Mohamed@outlook.com</p>
                            <p className="card-text">Cairo,Egypt</p>
                            <p className="card-text">Software Engineer</p>
                        </div>
                    </div>
                    <div className="card bg-secondary col-md-7 col-sm-12" style={{'margin-top':'100px','margin-bottom':'100px'}}>
                        <div className="card-body text-center">
                            <h4 className="card-title">Skilled languages</h4>
                            <ul className="card-text">
                                <li>ASP.NET Core </li>
                                <li>ASP.NET MVC Core </li>
                                <li>ASP.NET Web API </li>
                                <li>Nodejs</li>
                                <li>Angular</li>
                                <li>Reactjs</li>
                            </ul>
                            <hr/>
                            <h4 className="card-title">Job Experience</h4>
                            <ul className="card-text">
                                <li>Project Coordinator at EcoTel Holding</li>
                                <li>Site Engineer at EcoTel Holding</li>
                                <li>Enterprise Technical Support Engineer at TE-Data</li>
                                <li>Field Maintenance Engineer at MAG Consulting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Body
