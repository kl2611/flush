var React = require('react');
var SpotUtil = require('../../util/spot_util');
var Geosuggest = require('react-geosuggest');
//var Geocomplete = require('react-geocomplete');
var Map = require('../spots/Map');


var SearchBar = React.createClass({

    componentDidMount: function() {
        new google.maps.places.Autocomplete(
            document.getElementById('searchTextField')
            );
    },

    render: function() {
        return (
            <div>
                <div><label htmlFor="searchTextField">Insert an address</label></div>
                <div><input ref='searchField' id="searchTextField" /></div>
            </div>
        )
    }
});

module.exports = SearchBar;
