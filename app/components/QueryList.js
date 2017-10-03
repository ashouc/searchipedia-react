var React = require('react');
var Query = require('./Query');

const QueryList = (props) => {
  let count = 0;
  return (
    <div className='list'>
      {props.query.map(query => <Query key={query.title} {...query} />)}
    </div>
  )
}

module.exports = QueryList;
