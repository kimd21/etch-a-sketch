import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class HoverSquare extends React.Component {

}

class ConstructBoard extends React.Component {
  
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nxSquares: 0,
      nySquares: 0,
    };
  }

  render() {
    let grid = [];
    for (let i=0; i <= nxSquares; i++) {
      let gridRow = [];
      for (let j=0; j <= nySquares; j++) {
        gridRow.push(<div key={i*(j+1)}></div>);
      }
      grid.push(<div className={'grid-row-' + i}>{gridRow}</div>)
    }

    return(
      <div 
        className='container' 
        style={{
          gridTemplateRows: 'repeat(this.state.nxSquares, 1fr)',
          gridTemplateColumns: 'repeat(this.state.nySquares, 1fr)'
        }}
      >
          {grid}
      </div>
    );
  }
}