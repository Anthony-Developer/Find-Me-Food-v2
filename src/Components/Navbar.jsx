import React from 'react'
import '../Styling/Navbar.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'

function Navbar() {
    return (
        <div className="navbar_div">

            <div className="navbar_logo">
                <Link className="navbar_links" to="/">
                    <h2 className="navbar_title"> Find Me Food </h2>            
                </Link>
            </div>
            
            
            <div className="navbar_search">
                <input className="navbar_searchInput" type="text" />
                <SearchIcon className="navbar_searchIcon" />
            </div>

            <div className="navbar_userDiv">
                <h3 className="navbar_username"> Hello Guest </h3>

                <Link className="navbar_links" to='/login'>
                    <h3 className="navbar_signIn"> Sign In </h3>
                </Link>
            </div>
            
        </div>
    )
}

export default Navbar
