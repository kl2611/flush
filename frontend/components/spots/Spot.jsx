var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Spot = React.createClass({
    render: function () {
        return (
            <div>
                <ul>
                  <li>Description: {this.props.spot.description}</li>
                  <li>Latitude: {this.props.spot.lat}</li>
                  <li>Longitude: {this.props.spot.lng}</li>
                </ul>
            </div>
        );
    }
});

module.exports = Spot;
