import React, { Component } from 'react';
import './links.scss';

export default class Links extends Component {

    render() {
      return (
        <div className="links">
          <div className="link">Jackets</div>
          <div className="link">Skirts</div>
          <div className="link">Shoes</div>
          <div className="link">T-shirts</div>
          <div className="link">Shirts</div>
          <div className="link">Jeans</div>
        </div>
      );
    }
  }