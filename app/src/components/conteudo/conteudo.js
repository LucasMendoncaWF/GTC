import React, { Component } from 'react';
import './conteudo.scss';
import Header from '../header/header';
import Links from '../links/links';
import ItemShop from '../item-shop/item-shop';
import Related from '../related/related';

export default class Conteudo extends Component {

  state= {
    cart: 5,
    mobileMenu: false
  }

  addToCart = () =>{
    this.setState({cart: this.state.cart + 1});
  }

  MenuMobile = () =>{
    this.setState({mobileMenu: !this.state.mobileMenu});
  }

    render() {
      return (
        <div className="conteudo">  
           <Header mobilemenu={this.MenuMobile} cart={this.state.cart}/>
           <div className="corpo">
             <Links />
             <ItemShop addToCart={this.addToCart}/>
           </div>
           <Related />
           {this.state.mobileMenu?<div className="links-header-mobile">
            <div className="link-header">Men</div>
            <div className="link-header">Women</div>
            <div className="link-header">Kids</div>
          </div>: null}
        </div>
      );
    }
  }