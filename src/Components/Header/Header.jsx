import React from 'react';
import {Link} from 'react-router-dom'

function Header () {
    return (
        <div>
            <div className="header">
                <h1 className="header-title"> 
                <Link to="/">
                Avila's Crepes</Link>
                </h1> 
            </div>
        </div>
    )
}

export default Header