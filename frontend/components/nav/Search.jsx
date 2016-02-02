var React = require('react');
var SpotUtil = require('../../util/spot_util');
var Map = require('../spots/Map');
var Geocomplete = require('geocomplete')

var SearchBar = React.createClass({
    componentDidMount: function() {
        $("input").geocomplete();
    },

    loadAutocomplete: function() {
        $("input").geocomplete(options);
    },

    handleSearch: function() {
        $("submit").click(function(){
            $("input").trigger("geocode");
        });
    },

    render: function() {
        return (
            <div>
            <form>
                <input id="input" type="textbox" placeholder="Type in an address" />
                <input id="submit" type="button" value="Search" onChange={this.handleSearch} />
            </form>
            </div>
        )
    }
});

module.exports = SearchBar;
