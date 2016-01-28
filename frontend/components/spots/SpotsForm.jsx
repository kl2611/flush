var React = require('react');
var SpotUtil = require('../../util/spot_util.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SpotForm = React.createClass({
    mixins: [LinkedStateMixin],
    contextTypes: {
        router: React.PropTypes.func
    },
    getInitialState: function() {
        return ({name: "" });
    },

    handleSubmit: function(event) {
        event.preventDefault();
        var spot = Object.assign({}, this.state, this._coords());
        SpotUtil.createSpot(spot);
        this.navigateToSearch();
    },

    navigateToSearch: function() {
        this.props.history.pushState(null, "/");
    },

    handleCancel: function(event) {
        event.preventDefault();
        this.navigateToSearch();
    },

    _coords: function() {
        return this.props.location.query;
    },

    render: function() {
        var lat = this._coords().lat, lng = this._coords().lng;
        return (
            <div>
                <h3>New Restroom Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" valueLink={this.linkState('name')} />
                    <br />
                    <label>Description</label>
                    <input type="text" valueLink ={this.linkState('description')} />
                    <br />
                    <label>City</label>
                    <input type="text" valueLink={this.linkState('city')} />
                    <br />
                    <label>Latitude</label>
                    <input type="text" disabled="true" value={lat}/>
                    <br/>
                    <label>Longitude</label>
                    <input type="text" disabled="true" value={lng}/>
                    <br/>
                    <input type="submit" value="create spot" />
                </form>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        );
    }
});

module.exports = SpotForm;
