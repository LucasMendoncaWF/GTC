import React, { Component } from 'react';
import './item-shop.scss';

export default class ItemShop extends Component {

    render() {
      return (
        <div className="item-shop">
          <div className="item-image"></div>
          <div className="item-info">
            <div className="item-name">Blue Pants</div>
            <div className="select-item not-select">
              <div className="colors-select">
                <div className="color color-black"></div>
                <div className="color color-blue"></div>
                <div className="color color-red"></div>
              </div>
              <div className="quantidade"><input type="number" min="1"/></div>
            </div>
            <div className="button-item button-buy not-select">Buy now 29.99$</div>
            <div className="button-item button-add not-select" onClick={this.props.addToCart}>add to the shopping cart</div>
          </div>
        </div>
      );
    }
  }