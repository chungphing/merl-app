import React from 'react';
import MovieListItem from './movie_list_item';
class MovieList extends React.Component{
    render(){
        return(
            <div className="d-flex flex-row">
                <MovieListItem />
                <MovieListItem />
                <MovieListItem />
                <MovieListItem />
                <MovieListItem />
            </div>
        );
    }
}

export default MovieList;
