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

module.exports = Query;
