var React = require('react');
var ReactDOM = require('react-dom');

var MapDetail = React.createClass({
  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    this.spot = this.props.spot;
    console.log(this.spot)
    var mapOptions = {
      center: this.centerSpotCoords(),
      zoom: 15,
    };
    this.map = new google.maps.Map(map, mapOptions);
  },

    centerSpotCoords: function () {
        if (this.props.spots[0] && this.props.spots[0].lng) {
          var spot = this.props.spots[0];
          return { lat: spot.lat, lng: spot.lng };
        } else {
          return CENTER;
        }
  },

  componentDidUpdate: function (oldProps) {
    this._onChange();
  },

  componentWillReceiveProps: function(newProps) {
    this.createMarkerFromSpot(newProps.spot);
  },

  _onChange: function(){
    this.createMarkerFromSpot(this.props.spot);
  },

  componentWillUnmount: function(){
    this.markerListener.remove();
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
  },

  render: function(){

    return ( <ul id="map-address-container" className="list-unstyled">
              <li><div className="map" ref="map">Map</div></li>
              <li className="details-address-box">
                <ul className="list-unstyled">
                  <li><strong>Test</strong></li>
                  <li><strong>Test</strong></li>
                  <li>Test</li>
                </ul>
              </li>
            </ul>
          );
    }
});

module.exports = MapDetail;
