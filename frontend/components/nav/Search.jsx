var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SpotUtil = require('../../util/spot_util');
//var Map = require('../spots/Map');
//var Geocomplete = require('geocomplete');
var Dropdown = require('./SearchDropdown');

var SearchBar = React.createClass({

    getInitialState: function() {
        // this.styleSheetShow = document.createElement('style');
        // this.styleSheetShow.innerHTML = ".pac-container {display: block;}";
        return ({
            loc: "",
            placeholder: "Input address, neighborhood, city, state or zip",
            showAutocomplete: false,
            showSpinner: false
        });
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
                placeholder: "Please set location"
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
        console.log("pushStatefromsearch");
        this.props.history.pushState(null, 'search/' + loc);

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
            <button className="btn btn-default" onClick={this.handleSearch}>
            <span className="glyphicon glyphicon-search" />
            </button>
        );

        var buttonProgress = (
            <button className="btn btn-default" disabled>
              <div className="three-quarters-loader">
                Loading…
              </div>
            </button>
        );

        var design = (
                <input
                   type="text"
                   size="40"
                   className="form-control"
                   id="landing-search-input"
                   onChange={this.handleLocChange}
                   placeholder={this.state.placeholder}
                   ref="locinput"
                   onFocus={this.searchBarOnClick}
                   onBlur={this.searchBarOffClick} />
        );

        var showAutocomplete = (this.state.loc !== "") && this.state.showAutocomplete;

        return (
                    <form className="navbar-form navbar-nav" role="search" onSubmit={this.handleSearch}>
                            {design}
                            {showAutocomplete ? <Dropdown
                                                                        locinput = {this.refs.locinput}
                                                                        handleSearch = {this.handleSearch}
                                                                        handleLocChange = {this.handleLocChange} /> : "" }
                            {buttonSubmit}
                    </form>
        );
    }
});

module.exports = SearchBar;
