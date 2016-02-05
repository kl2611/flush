var React = require('react');
var ListItem = require('./ListItem');

var List = React.createClass({
  handleItemClick: function (spot) {
    this.props.history.pushState(null, "spots/" + spot.id );
  },
  render: function(){
    var handleItemClick = this.handleItemClick;
    return (
      <div className="list">
        <h4>Restrooms near you</h4>
        {
          this.props.spots.map(function(spot){
            var boundClick = handleItemClick.bind(null, spot);
            return <ListItem
              onClick={boundClick}
              spot={spot}
              key={spot.id} />
          })
        }
      </div>
    );
  }
});

module.exports = List;
