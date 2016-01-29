var React = require('react');
var ReactRouter = require('react-router');

var Rating = React.createClass({
    componentDidMount: function() {
        ratingId = "spot-rating-" + this.props.ratingId;
        $(ratingId).rating({
            min: "0",
            max: "5",
            step: "1",
            showClear: false,
            showCaption: false,
            readonly: true,
            size: "xxs"
        });
    },

    componentWillReceiveProps: function(newProp) {
        ratingId = "spot-rating-" + this.props.ratingId;
        $(ratingId).rating('update', newProp.rating);
    },

    render: function() {
        ratingId = "spot-rating-" + this.props.ratingId;
        return (
            <div>
                <input id={ratingId}
                    className="rating"
                    type="number"
                    min='1'
                    max='5' />
            </div>
        );
    }

});

module.exports = Rating;
