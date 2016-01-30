var React = require('react');
var SpotUtil = require('../../util/spot_util');
var Geosuggest = require('react-geosuggest');

var SearchBar = React.createClass({
    render: function() {
        return (
            <Geosuggest />
        )
    }
});

module.exports = SearchBar;
