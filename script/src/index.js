import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Width and height of entire sketchpad
const w = `500px`;
const h = w;

class Square extends React.Component {
  render() {
    const squareStyle = {
      display: 'grid',
      width: `calc(${w}/${this.props.nxSquares})`,
      height: `calc(${h}/${this.props.nySquares})`,
      border: '1px solid black',
      justifyItems: 'center',
      alignItems: 'center',
      textAlign: 'center',
      cursor: 'pointer'
    }

    const handleMouseAction = (e) => {
      e.target.style.background = 'black';
    };

    return(
      <div 
        className='square'
        style={squareStyle}
        onMouseOver={handleMouseAction}
      >
      </div>
    );
  }
}

class ConstructBoard extends React.Component {
  render() {
    let grid = [];
    //Iterate over number of rows (nySquares)
    for (let i=0; i < this.props.nySquares; i++) {
      //Iteratore over number of columns (nxSquares)
      for (let j=0; j < this.props.nxSquares; j++) {
        let idx = i * this.props.nxSquares + j;
        grid.push(
          <Square 
            key={idx} 
            nxSquares={this.props.nxSquares} 
            nySquares={this.props.nySquares}
          />
        );
      }
    }

    const gridStyle = {
      width: `${w}`,
      height: `${h}`,
      gridTemplateRows: `repeat(${this.props.nySquares}, 1fr)`,
      gridTemplateColumns: `repeat(${this.props.nxSquares}, 1fr)`
    };

    return(
      <div 
        className='container' 
        style={gridStyle}
      >
        {grid}
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nxSquares: null,
      nySquares: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeRows = this.handleChangeRows.bind(this);
    this.handleChangeCols = this.handleChangeCols.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      nxSquares: null,
      nySquares: null,
    })
  }

  handleChangeRows(e) {
    this.setState({
      nySquares: e.target.value
    })
  }

  handleChangeCols(e) {
    this.setState({
      nxSquares: e.target.value
    })
  }

  render() {
    return(
      <div>
        <h1 id='title'>Etch-a-Sketch!</h1>
        <form id='main-form' onSubmit={this.handleSubmit}>
          <div>
            <button id='reset-btn'>Reset Sketch</button>
          </div>
          <div>         
            <input 
              type='text' 
              placeholder='Number of Rows (Max 100)'
              value={this.state.nySquares || ''}
              name='nrows' 
              onChange={this.handleChangeRows}
            />
          </div>
          <div>       
            <input 
              type='text' 
              placeholder='Number of Columns (Max 100)'
              value={this.state.nxSquares || ''}
              name='ncols' 
              onChange={this.handleChangeCols}
            />
          </div>
        </form>
        <ConstructBoard 
          nxSquares={this.state.nxSquares} 
          nySquares={this.state.nySquares}
        />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));