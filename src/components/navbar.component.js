import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {

        return(
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
                <Link to ="/" className="navbar-brand">Product Tracker</Link>
             <div className="collapse navbar-collapse" >

                <ul className="navbar-nav mr-auto">

                  <li className="nav-item">
                  <Link to ="/" className="nav-link">Products</Link>
                  </li>

                  <li className="navbar-item">
                  <Link to ="/create" className="nav-link">Create Product Log</Link>
                  </li>

                  <li className="navbar-item">
                  <Link to ="/user" className="nav-link">Create User</Link>
                  </li>

                </ul>
             </div>
            </nav>


        );
    }
}