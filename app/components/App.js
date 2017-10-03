var React = require('react');
var QueryList = require('./QueryList');
var Form = require('./Form');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };

    this.addNewResult = (queryResult) => {
      this.setState({data: []})
      for (let i = 0; i < queryResult[1].length; i++) {
        this.state.data.push({
          title: queryResult[1][i],
          paragraph: queryResult[2][i],
          link: queryResult[3][i]
        })
      };
      this.setState({data: this.state.data})
    };
  };

  render() {
    return (
      <div className='container'>
        <h1>Searchipedia</h1>
        <p>Wikipedia Search Engine</p>
        <a target ="_blank" href="https://en.wikipedia.org/wiki/Special:Random"><i className="fa fa-random" aria-hidden="true"></i></a>
        <Form onInput={this.addNewResult}/>
        <QueryList query={this.state.data} />
      </div>
    )
  }
}

module.exports = App;
