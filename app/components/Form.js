var React = require('react');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { querySearch: ''};
    this.handleSearch = (event) => {
      this.setState({querySearch: event.target.value});
      let noSpaceText = event.target.value.replace(/\s/,'%20');
      if(!noSpaceText) {
        this.props.onInput(null);
        return;
      }
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
      <form>
        <input style={{margin: '10px 0px', width: '75%'}}
        value={this.state.querySearch}
        onChange={this.handleSearch}
        type="text"
        placeholder="Search here" required /><i className="fa fa-search" aria-hidden="true"></i>
      </form>
    )
  }
}

module.exports = Form;
