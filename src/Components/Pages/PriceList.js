import React, { Component } from 'react'
import axios from 'axios';

export default class PriceList extends Component {
    constructor(props){
        super(props)
        this.state = {
            items:[]
        }
    }

    componentDidMount() {
        axios.get(`/Product.json`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
      }

    render() {
        console.log(this.state.data);
        return(
        <div className="container content-container">
           <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 className="display-4">Liste de prix</h1>
                <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>
            <div className="card-deck mb-3 text-center">

            {this.state.items.map(item => {
    return(
        <div key={item.id} className="card mb-4 shadow-sm">
        <div className="card-header">
            <h4 className="my-0 font-weight-normal">{item.name}</h4>
            <img className="img-thumbnail rounded my-3" src={item.img}/>
        </div>
        <div className="card-body">
            <h5 className="card-title pricing-card-title">CHF {item.price} <small className="text-muted">/ mo</small></h5>
            <ul className="list-unstyled mt-3 mb-4">
                <li><strong>Surface :</strong>  {item.surface}</li>
                <li><strong>Vaulume  :</strong> {item.volume}</li>
                <li><strong>Type de stockage :</strong> {item.type}</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Louer</button>
        </div>
    </div>
    )

    })}
                

          
            </div>
        </div>
        )
    }
}
