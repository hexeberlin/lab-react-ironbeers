import React, { Component } from 'react'
import api from '../api'
import Header from '../components/Header'

export default class Beer extends Component {
    constructor(props){
        super(props)
        this.state = {
          beer: ""
        }
      }
    render(){
    return (
      <div>
        <Header />
        <div className="one-beer">
        <img src={this.state.beer.image_url} alt=""/>
        <div className="details">
              <h2>{this.state.beer.name}</h2>
              <p className='tagline'>{this.state.beer.tagline}</p>
              <p>{this.state.beer.first_brewed}</p>
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.description}</p>
              <p>{this.state.beer.contributed_by}</p>
              
        </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    if(this.props.isRandom === "true") {
      api.getRandomBeer()
        .then(beer => {
          this.setState({
            beer: beer.data[0]
          })
        })
    } else {
      api.getSingleBeer(this.props.match.params.id)
          .then(beer => {
            this.setState({
              beer: beer.data
            })
          })
      }
    }
}
