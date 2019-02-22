import React, { Component } from 'react'
import Header from '../components/Header'
import { Link } from "react-router-dom";
import api from '../api'

export default class AllBeers extends Component {
    constructor(props){
        super(props)
        this.state = {
          beers: []
        }
      }
  render() {
    return (
      <div>
        <Header />
        {this.state.beers.map((beer, index) => {
            return <div key={index} className="beer-container">
                <img src={beer.image_url} alt=""/>
                <div className="content">
                    <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                    <p className='tagline'>{beer.tagline}</p>
                    <p><strong>Created by: </strong>{beer.contributed_by}</p>
                </div>
            </div>
        })}
      </div>
    )
  }
  componentDidMount(){
    api.getBeers()
        .then(beers => {
          this.setState({
            beers: beers
          })
        })
    }
}
