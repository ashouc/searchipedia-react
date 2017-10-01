var React = require('react');

const Query = (props) => {
  return (
    <div className='result'>
      <div className='bubble'>
        <h2>{props.title}</h2>
        <div className="text">{props.paragraph}</div>
        <a style={{padding: '0px 10px 5px', display: 'block', textAlign:'right'}} target="_blank" href={props.link}>See full article</a>
      </div>
    </div>
  )
}

const QueryList = (props) => {
  let count = 0;
  return (
    <div className='list'>
      {props.query.map(query => <Query key={query.title} {...query} />)}
    </div>
  )
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { querySearch: ''};
    this.handleSubmit = (event) => {
      event.preventDefault();
      let noSpaceText = this.state.querySearch.replace(/\s/,'%20');
      axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
    			action: 'opensearch',
    			datatype: 'json',
    			limit: 15,
    			search: noSpaceText,
    			origin: '*'
    		}
    	})
      .then((resp) => {
        this.props.onInput(resp.data);
      })
    }
  }
  render() {
    return (
      <form onInput={this.handleSubmit}>
        <input style={{margin: '10px 0px', width: '75%'}}
        value={this.state.querySearch}
        onChange={(event) => this.setState({querySearch: event.target.value})}
        type="text"
        placeholder="Search here" required /><i className="fa fa-search" aria-hidden="true"></i>
      </form>
    )
  }
}

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
