import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      current: '',
      content: cowsay.say({text: 'Click the button or select an option ...'}),
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    cowsay.list((err, cows) => {
      let current = cows[0];
      this.setState({cows, current});
    });
  }

  handleClick(e) {
    let current = e.target.value ? e.target.value : this.state.current;
    let text = faker.hacker.phrase();
    this.setState(prevState => {
      return {current, content: cowsay.say({
        text,
        f: current}),
      };
    });
  }

  // handleChange(e) {
  //   let current = e.target.value;
  //   let text = faker.hacker.phrase();
  //   this.setState(prevState => {
  //     return {current, content: cowsay.say({
  //       text,
  //       f: current}),
  //     };
  //   });
  // }

  render() {
    return (
      <div className="application">
        <header>
          <h1>Generate Cowsay Lorem</h1>
        </header>
        <select onChange={this.handleClick}>
          {this.state.cows.map((cow, i) => {
            return <option key={i} value={cow}>{cow}</option>;
          })}
        </select>
        <button onClick={this.handleClick}>Click</button>

        <pre>
          <code>
            {this.state.content}
          </code>
        </pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
