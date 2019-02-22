import React, { Component } from 'react'
import Header from '../components/Header'
import api from '../api'

export default class NewBeer extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    let newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value,
    }
    api.createNewBeer(newBeer)
      .then(res => {

        this.props.history.push("/")
      })
  }
  render() {
    return (
      <div>
        <Header />
        <form className="new-beer" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name"/>
          <label>Tagline</label>
          <input type="text" name="tagline"/>
          <label>Description</label>
          <input type="textarea" name="description"/>
          <label>First Brewed</label>
          <input type="text" name="first_brewed"/>
          <label>Brewers Tips</label>
          <input type="text" name="brewers_tips"/>
          <label>Attenuation Level</label>
          <input min="1" type="number" name="attenuation_level"/>
          <label>Contributed By</label>
          <input type="text" name="contributed_by"/>
          <button type="submit" value="Submit">ADD NEW</button>
        </form>
      </div>
    )
  }
}
