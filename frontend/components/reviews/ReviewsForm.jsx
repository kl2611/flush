var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var History = require('react-router').History;
var ReactRouter = require('react-router');
var ReviewUtil = require('../../util/review_util');

var ReviewForm = React.createClass({
    mixins: [LinkedStateMixin, History],

    getInitialState: function () {
        return { rating: 5, comment: "" };
    },

    navigateToSpotShow: function () {
        var spotUrl = "/spots/" + this.props.params.spotId;
        this.props.history.pushState(null, spotUrl);
    },

    handleCancel: function(event) {
        event.preventDefault();
        this.navigateToSpotShow();
    },

    handleSubmit: function(event) {
        event.preventDefault();
        var review = $.extend(
            {},
            this.state,
            { spot_id: this.props.params.spotId }
        );
        ReviewUtil.createReview(review);
        this.navigateToSpotShow();
    },

    render: function () {
        return (
            <div className = "review-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Rating</label>

            <div className="star-rating">
                <input type="radio" name="example" className="rating" value="1" />
                <input type="radio" name="example" className="rating" value="2" />
                <input type="radio" name="example" className="rating" value="3" />
                <input type="radio" name="example" className="rating" value="4" />
                <input type="radio" name="example" className="rating" value="5" />
            </div>


                    <br />
                    <input type="number" valueLink={this.linkState('rating')} />
                    <br />

                    <label>Comment</label>
                    <br />
                    <textarea
                        cols='30'
                        rows='10'
                        valueLink={this.linkState('comment')}></textarea>
                    <br />
                    <input type="submit" />
                </form>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        );
    }
});

module.exports = ReviewForm;
