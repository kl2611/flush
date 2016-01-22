var React = require('react');
var ReactDOM = require('react-dom');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var CENTER = {lat: 40.7127, lng: -74.0059};

var Map = React.createClass({
    componentDidMount: function(){
      console.log('map mounted');
      var mapDOMNode = this.refs.map;
      var mapOptions = {
        center: CENTER,
        zoom: 13
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
    },

  componentDidUpdate: function (oldProps) {
    this._onChange();
  },

  componentWillReceiveProps: function(newProps) {
    if (this.props.spots) {
      newProps.spots.forEach(this.createMarkerFromSpot);
    }
  },

  _onChange: function(){
    var spots = this.props.spots;
    var toAdd = [], toRemove = this.markers.slice(0);
    spots.forEach(function(spot, idx) {
      var idx = -1;

      for(var i = 0; i < toRemove.length; i++){
        if(toRemove[i].spotId == spot.id){
          idx = i;
          break;
        }
      }
      if(idx === -1){
        toAdd.push(spot);
      } else {
        toRemove.splice(idx, 1);
      }
    });
    toAdd.forEach(this.createMarkerFromSpot);
    toRemove.forEach(this.removeMarker);
  },

  componentWillUnmount: function(){
    this.markerListener.remove();
    console.log("map UNmounted");
  },

  createMarkerFromSpot: function (spot) {
    var that = this;
    var pos = new google.maps.LatLng(spot.lat, spot.lng);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      spotId: spot.id
    });
    this.markerListener = marker.addListener('click', function () {
      that.props.onMarkerClick(spot);
    });
    this.markers.push(marker);
  },

  removeMarker: function(marker){
    for(var i = 0; i < this.markers.length; i++){
      if (this.markers[i].spotId === marker.spotId){
        this.markers[i].setMap(null);
        this.markers.splice(i, 1);
        break;
      }
    }
  },

  render: function() {
    return ( <div className="map" ref="map">Map</div>);
  }
});

module.exports = Map;
