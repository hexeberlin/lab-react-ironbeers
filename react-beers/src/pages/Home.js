import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    // To improve: Create a component for each link
    return (
      <div className="Home">
        <img src="/images/all-beers.jpg" alt="all-beers" className="banner" />
        <div className='content'>
            <Link to="/beers">All Beers</Link>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            reprehenderit eius quod illum tempore quisquam, omnis fugit hic quia
            commodi natus tempora quaerat tenetur incidunt consequatur amet
            inventore culpa iusto!
            </p>
        </div>
        <img src="/images/random-beer.jpg" alt="random-beer" className="banner"/>
        <div className='content'>
            <Link to="/random-beer">Random Beer</Link>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            reprehenderit eius quod illum tempore quisquam, omnis fugit hic quia
            commodi natus tempora quaerat tenetur incidunt consequatur amet
            inventore culpa iusto!
            </p>
        </div>
        <img src="/images/new-beer.jpg" alt="new-beer" className="banner"/>
        <div className='content'>
            <Link to="/new-beer">New Beer</Link>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            reprehenderit eius quod illum tempore quisquam, omnis fugit hic quia
            commodi natus tempora quaerat tenetur incidunt consequatur amet
            inventore culpa iusto!
            </p>
        </div>
      </div>
    );
  }
}
