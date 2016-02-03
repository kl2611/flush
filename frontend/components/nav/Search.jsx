var React = require('react');
var SpotUtil = require('../../util/spot_util');
var Map = require('../spots/Map');
var Geocomplete = require('geocomplete');
var Dropdown = require('./SearchDropdown');

var SearchBar = React.createClass({

    getInitialState: function() {
        this.styleSheetShow = document.createElement('style');
        this.styleSheetShow.innerHTML = ".pac-container {display: block;}";

        return ({
            loc: "",
            placeholder: "Input address",
            showAutocomplete: false,
            showSpinner: false
        });
    },

    // componentDidMount: function() {
    //     var options = {
    //     };

    //     $("input").geocomplete(options);
    // },

    searchBarOnClick: function() {
        this.setState({
            showAutocomplete: true
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
            this.redirectToSearch();
            // this.setState({
            //     showSpinner: true
            // })
        }
    },

    redirectToSearch: function() {
        var loc = this.state.loc.replace(/\W+/g, "-");
        console.log("pushStatefromsearch");
        this.props.history.pushState(null, 'search/' + loc);
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
            <div>
                <form className="input-group" role="form" onSubmit={this.handleSearch}>
                    <input
                       type="text"
                       className="form-control center"
                       id="landing-search-input"
                       onChange={this.handleLocChange}
                       placeholder={this.state.placeholder}
                       ref="locinput"
                       onFocus={this.searchBarOnClick} />

                     {this.state.showSpinner ? buttonProgress : buttonSubmit}

              </form>
            </div>
        );

        var showAutocomplete = (this.state.loc !== "") && this.state.showAutocomplete;

        return (
            <div ref="searchbar">
            {design}
            {showAutocomplete ? <Dropdown
                                                        locinput = {this.refs.locinput}
                                                        handleSearch = {this.handleSearch}
                                                        handleLocChange = {this.handleLocChange}/> : "" }
            </div>
        );
    }
});

module.exports = SearchBar;
