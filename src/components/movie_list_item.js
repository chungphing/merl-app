import React from "react";

class MovieListItem extends React.Component {
    render(){
        return(
            <div className="card">
                <div className="card-img-top">
                    <img src="http://via.placeholder.com/150x200" alt=""/>
                </div>
                <div className="card-title">
                    some text
                </div>
            </div>
        );
    }
}

export default MovieListItem;