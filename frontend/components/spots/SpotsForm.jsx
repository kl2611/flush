
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
        <div className="container-fluid">
            <div className="search-index-container">
                <div className="form">
                    <h3>New Restroom Form</h3>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset className="form-group">
                            <label>Name of Restroom</label>
                            <input type="name" className="form-control" placeholder="e.g. Times Square" valueLink={this.linkState('name')} />
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Description</label>
                            <input type="description" className="form-control" placeholder="e.g. Located on the second floor of the buildling" valueLink ={this.linkState('description')} />
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Latitude</label>
                            <input type="text" className="form-control" disabled="true" value={lat}/>

                            <label>Longitude</label>
                            <input type="text" className="form-control" disabled="true" value={lng}/>
                        </fieldset>

                            <input type="submit" className="btn btn-primary" value="Create spot" />
                    </form>
                    <p />

                    <button type="submit" className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                </div>
            </div>
        </div>
        );
    }
});

module.exports = SpotForm;
