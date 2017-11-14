import React from 'react';

export default class Navigation extends React.Component{
    render(){
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="">All</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Soon</a></li>
                    <li className="nav-item"><a className="nav-link" href="">My Fav</a></li>
                    <li className="nav-item"><a className="nav-link" href="">Watched</a></li>
                </ul>
            </div>
            </nav>
        
        );
    }
}