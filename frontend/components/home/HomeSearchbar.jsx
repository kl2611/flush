var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
//var SpotUtil = require('../../util/spot_util');
//var Map = require('../spots/Map');
//var Geocomplete = require('geocomplete');
var Dropdown = require('../nav/SearchDropdown');

var HomeSearchBar = React.createClass({

    getInitialState: function() {
        return ({
            loc: "",
            placeholder: "Input address, neighborhood, city, state or zip",
            showAutocomplete: false,
            showSpinner: false
        });
    },

    componentDidMount: function() {

    },

    searchBarOnClick: function() {
        this.setState({
            showAutocomplete: true
        });
    },

    searchBarOffClick: function() {
        this.setState({
            showAutocomplete: false
        });
    },

    handleSearch: function(e) {
        if (arguments.length > 0) {
            e.preventDefault();
        }

        if (this.state.loc === "" ) {
            this.setState({
                placeholder: "Please set a location"
            });
        } else {
            setTimeout(this.redirectToSearch, 1000);
            this.setState({
                showSpinner: true
            });
        }
    },

    redirectToSearch: function() {
        var loc = this.state.loc.replace(/\W+/g, "-");
        this.props.history.pushState(null, '/search/' + loc);

        // hmm fix this somehow
        this.setState({
            showSpinner: false
        })
    },

    handleLocChange: function(e) {
        this.setState({
            loc: this.refs.locinput.value
        });
    },

    render: function() {
        var buttonSubmit = (
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this.handleSearch}>Search</button>
          </span>
        );

        var buttonProgress = (
            <span className="input-group-btn">
                <button className="btn btn-default" disabled>
                    <div className="three-quarters-loader">
                        Loading…
                    </div>
                </button>
            </span>
        );

        var design = (
        <div className="col-xs-12">
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="col-xs-offset-2 col-xs-8">
                        <form className="input-group" role="search" onSubmit={this.handleSearch}>
                        <input
                           type="text"
                           className="form-control"
                           id="landing-search-input"
                           onChange={this.handleLocChange}
                           placeholder={this.state.placeholder}
                           ref="locinput"
                           onFocus={this.searchBarOnClick}
                           onBlur={this.searchBarOffClick} />

                           {this.state.showSpinner ? buttonProgress : buttonSubmit}
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );

        var showAutocomplete = (this.state.loc !== "") && this.state.showAutocomplete;

        return (
            <div className="col-xs-12">
                        {design}
                        {showAutocomplete ? <Dropdown
                                                                    locinput = {this.refs.locinput}
                                                                    handleSearch = {this.handleSearch}
                                                                    handleLocChange = {this.handleLocChange} /> : "" }
            </div>
        );
    }
});

module.exports = HomeSearchBar;
