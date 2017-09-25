import './styles/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => {
      return {content: cowsay.say({
        text: faker.lorem.sentence(),
        f: 'ghostbusters'}),
      };
    });
  }

  render() {
    return (
      <div className="application">
        <header>
          <h1>Generate Cowsay Lorem</h1>
        </header>
        <button onClick={this.handleClick}>Click</button>
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
