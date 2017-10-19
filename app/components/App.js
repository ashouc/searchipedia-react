var React = require('react');
var QueryList = require('./QueryList');
var Form = require('./Form');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    };
    this.normalizeData = (rawData) => {
      return rawData[1].map(function(title, index) {
        return {
          title: title,
          paragraph: rawData[2][index],
          link: rawData[3][index]
        }
      })
    }
    this.addNewResult = (queryResult) => {
      if(queryResult === null) {
        this.setState({data: []})
        return;
      }
      const searchResult = this.normalizeData(queryResult)
      this.setState({ data: searchResult });
    }
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
