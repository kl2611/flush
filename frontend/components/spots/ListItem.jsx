var React = require('react');
var ReactRouter = require('react-router');

var ListItem = React.createClass({
  mixins: [ReactRouter.history],
  render: function(){
    var spot = this.props.spot;
    return (
        <div className="spot-list-item" onClick={this.props.onClick}>
          <b>{spot.name}</b>
          <br />
          {spot.description}
          <br/>
          Rating: {spot.average_rating || "No reviews yet"}
          <br/>
          <img src={spot.picture_url}/>
        </div>
    );
  }
});

module.exports = ListItem;
