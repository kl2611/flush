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
      results = <div><h3>No public restrooms near you. Click on the map to place a new location!</h3>
      <h4>Or, check out the demo at Morningside Heights</h4>
      </div>
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
          {results}
      </div>
    );

  }
});

module.exports = List;
