import React from 'react';

class Corousel extends React.Component {
    render(){
        return(
            <div>
                image corousel
                   <div id="carouselControls" className="carousel slide" data-ride='carousel'>
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img src="http://via.placeholder.com/350x150" alt="" className="d-block w-50"/></div>
                        <div className="carousel-item"><img src="http://via.placeholder.com/350x150" alt="" className="d-block w-50"/></div>
                        <div className="carousel-item"><img src="http://via.placeholder.com/350x150" alt="" className="d-block w-50"/></div>
                    </div>
                    <a href="" className="carousel-control-prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a href="" className="carousel-control-next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Next</span>
                    </a>
                   </div>
            </div>          
        );
    }
}

export default Corousel;