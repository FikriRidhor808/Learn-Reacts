import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : "Bakso",
            minuman : "es teh",
        };
    }

    gantiMakanan = (makanan_baru) => {
        this.setState({makanan: makanan_baru});
    };

  render() {
    return (
        <div>
      <div>{this.state.makanan}</div>
      <button onClick={() => this.setState({ makanan: "soto"})}>
        Ganti makanan
      </button>
      <Operan makanan={this.state.makanan} />
      <div>{this.state.minuman}</div>
      <button onClick={() => this.setState({ minuman: "air putih"})}>
        Ganti makanan
      </button>
      </div>
    );
  }
}
