var React = require('react');
var ReactRouter = require('react-router');
var StarRating = require('react-star-rating');

var Rating = React.createClass({
    componentDidMount: function() {
        var options = {
            max_value: 5,
            step_size: 1,
            initial_value: 1
        }
        $("#spot-rating").rating(options);
    },

    componentWillReceiveProps: function(newProp) {
       $("#spot-rating").rating('update', newProp.rating);
    },

    render: function() {
        return (
            <div>
            <ul>
                <li>
                <input id="spot-rating"
                    className="rating"
                    type="number"
                    min='1'
                    max='5' />
                </li>
            </ul>
            </div>
        );
    }

});

module.exports = Rating;
