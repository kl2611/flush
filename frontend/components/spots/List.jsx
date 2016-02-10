var React = require('react');
var ListItem = require('./ListItem');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var List = React.createClass({
  handleItemClick: function (spot) {
    this.props.history.pushState(null, "/spots/" + spot.id );
  },

  render: function(){
    var handleItemClick = this.handleItemClick;

    if (this.props.spots.length === 0) {
      results = <div>No public restrooms near you. Click on the map to place a new location!</div>
    } else {
        results = <div>{this.props.spots.map(function(spot){
            var boundClick = handleItemClick.bind(null, spot);
            return (<ListItem
                          onClick={boundClick}
                          spot={spot}
                          key={spot.id} />)
          })
      }</div>
    }

    return (
      <div className="list">
        <h4>Restrooms near you</h4>
          {results}
      </div>
    );

  }
});

module.exports = List;
