import React from 'react';
import Searchbar from './searchbar';

class Header extends React.Component{
    render(){
        return(

            <div className="d-flex p-2 flex-row justify-content-center">
                <div>Logo</div>                
                <Searchbar  />
            </div>
        );
    }
}

export default Header;