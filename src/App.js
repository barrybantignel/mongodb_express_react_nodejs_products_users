import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 

import Navbar from "./components/navbar.component";
import ProduitsList from "./components/produits-list.component";
import EditProduit from "./components/edit-produit.component";
import CreateProduit from "./components/create-produit.component";
import CreateUser from "./components/create-user.component";

class ShoppingList extends Component {
  render() {

    return (
      <Router>

        <div className="container">
          
        <Navbar />
        <br />

         <Route path="/" exact component={ProduitsList} /> 
         <Route path="/edit/:id" component={EditProduit} /> 
        <Route path="/create" component={CreateProduit} />
        <Route path="/user" component={CreateUser} /> 

        </div>

      </Router>
    );

  }
  
}

export default ShoppingList;
