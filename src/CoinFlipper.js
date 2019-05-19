import React, { Component } from 'react';
import Coin from './Coin'

class CoinFlipper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heads: true
    };
  }

  flip = () => {
    this.setState({
      heads: !this.state.heads
    })
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Heads or Tails?</h1>
        <Coin heads={this.state.heads}/>
        <button onClick={this.flip}>Flip</button>
      </div>
    );
  }

}

export default CoinFlipper;
