import React, { Component } from 'react';
import Coin from './Coin'

class CoinFlipper extends Component {

    static defaultProps = {
      coins: [
        {side: 'heads', imgSrc:'https://tinyurl.com/react-coin-heads-jpg'},
        {side: 'tails', imgSrc:'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'}
      ]
    }
    constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    }
  }

  flipCoin = () => {
    this.setState({
      nFlips: this.state.nFlips+1
    })
    const newCoin = this.props.coins[Math.floor(Math.random() * this.props.coins.length)]
    newCoin.side === 'heads' ? this.setState({nHeads: this.state.nHeads + 1}) : this.setState({nTails: this.state.nTails + 1})
  }

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Heads or Tails?</h1>
        <Coin heads={this.state.heads}/>
        <button onClick={this.flipCoin}>Flip</button>
        <h4>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails.</h4>
      </div>
    );
  }

}

export default CoinFlipper;
