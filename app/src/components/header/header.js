import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {

    render() {
      return (
        <div className="header">
          <div className="mobile-menu" onClick={this.props.mobilemenu}>
            <div className="mobile-menu-bar"></div>
            <div className="mobile-menu-bar"></div>
            <div className="mobile-menu-bar"></div>
          </div>
          <div className="search-mobile"></div>
          <a href="/" className="logo"></a>
          <div className="links-header">
            <div className="link-header">Men</div>
            <div className="link-header">Women</div>
            <div className="link-header">Kids</div>
            <div className="input"><input type="text" className="search-header"/></div>
          </div>
          <div className="cart">{this.props.cart} itens</div>
        </div>
      );
    }
  }