var React = require('react');
var ReactDOM = require('react-dom');

var DropDown = React.createClass({
    _fillInAddress: function() {
        this.props.handleLocChange();
        this.props.handleSearch();
    },

    // componentWillUnmount: function() {
    //     document.getElementById('html-body').removeChild(document.getElementsByClassName("pac-container")[0])
    // },

    componentDidMount: function () {
        this.lautofill = ReactDOM.findDOMNode(this.props.locinput);
        this.autofillOptions = {
          types: ['geocode']
        };
        this.autofill = new google.maps.places.Autocomplete(this.lautofill, this.autofillOptions);
        this.autofill.addListener('place_changed', this._fillInAddress);
    },

    render: function() {
        return (
            <div />
        )
    }
});

module.exports = DropDown;
