var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ListItem = React.createClass({
  mixins: [ReactRouter.history],

  handleItemClick: function (spot) {
    this.props.history.pushState(null, "spots/" + spot.id );
  },

  render: function(){
    var spot = this.props.spot;
    return (
        <div className="spot-list-item">
          <hr />
          <b><Link to={null, "spots/" + spot.id}>{spot.name}</Link></b>
          <br />
          Rating: {spot.average_rating || "No reviews yet"}
          <br/>
          {spot.description}
          <br/>
          <img src={spot.picture_url}/>
        </div>
    );
  }
});

module.exports = ListItem;
