import React, { Component } from 'react';
import './related.scss';
import Shoe from '../../images/sapato.png';
import Bag1 from '../../images/bolsa1.png';
import Bag2 from '../../images/bolsa2.png';

export default class Related extends Component {

    render() {
      return (
        <div className="related">
          <div className="related-title">Related Items:</div>
          <div className="related-items">
            <div className="related-item">
              <img className="related-img" alt="item" src={Shoe}/>
              <div className="related-name">shoe</div>
              <div className="related-price">15.99 $</div>
            </div>
            <div className="related-item">
              <img className="related-img" alt="item" src={Bag1}/>
              <div className="related-name">bag</div>
              <div className="related-price">35.99 $</div>
            </div>
            <div className="related-item">
              <img className="related-img" alt="item" src={Bag2}/>
              <div className="related-name">bag</div>
              <div className="related-price">35.99 $</div>
            </div>
          </div>
        </div>
      );
    }
  }