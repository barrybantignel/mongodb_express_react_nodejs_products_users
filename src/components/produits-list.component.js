import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const Produit = props => (
    <tr>
        <td>{props.produit.username}</td>
        <td>{props.produit.description}</td>
        <td>{props.produit.duration}</td>
        <td>{props.produit.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/" +props.produit._id}>edit</Link> |
            <a href="#" onClick={() => { props.deleteProduit(props.produit._id)}}>delete</a> 
        </td>
    </tr>
)




export default class ProduitsList extends Component {

    //cycle de vie 
    constructor(props) {
        super(props);

        this.deleteProduit = this.deleteProduit.bind(this);

        this.state = {produits: []};
    }

    

    // mise à jour 
    componentDidMount() {
        axios.get('http://localhost:5003/produits/')
          .then(response => {
              this.setState({ produits: response.data})
          })
          .catch( (error) => {
              console.log(error)
          })       
    }
    

    deleteProduit(id) {
        axios.delete('http://localhost:5003/produits/' + id)
          .then(res => console.log(res.data));

        this.setState({
            produits:this.state.produits.filter(el => el._id !== id)
        })
    }

    produitList() {
        return(this.state.produits.map(currentproduit => {
            return(<Produit produit={currentproduit} deleteProduit={this.deleteProduit} key={currentproduit._id} />)
        }))
    }

    render() {

        return(
            <div>
                <h3> Les Produits enregistrés</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>                            
                        </tr>

                    </thead>

                    <tbody>
                        {this.produitList()}
                    </tbody>

                </table>
            </div>
        )
    }
}

 