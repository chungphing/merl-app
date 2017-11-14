import React from 'react';
import Header from './header';
import Navigation from './navigation';
import MovieList from './movie_list';
import Corousel from './corousel/corousel'
export default class App extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <Navigation />
                <div className="d-flex flex-row">
                    <Corousel />
                </div>
                

                <hr/>
                <div className="container " style={{maxWidth: 1024 + 'px', margin: 'auto'}}>
                    <h2>Most Popular</h2>
                    <MovieList />
                    <h2>Now Showing</h2>
                    <MovieList />
                </div>
                
            </div>
        );
    }
}