import React, { Component } from 'react';

import './Coin.css';

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        {this.props.heads ? <img src="https://tinyurl.com/react-coin-heads-jpg"/> : <img src="http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"/>  }
      </div>
    );
  }

}

export default Coin;
