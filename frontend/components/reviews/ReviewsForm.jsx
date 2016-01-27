var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var ReviewUtil = require('../../util/review_util');

var ReviewForm = React.createClass({
    mixins: [LinkedStateMixin, ReactRouter.history],
    getInitialState: function () {
        return { rating: 5, body: "" };
    },

    navigateToSpotShow: function () {
        var spotUrl = "/spots/" + this.props.params.spotId;
        this.props.history.pushState(null, spotUrl);
    },

    handleCancel: function(event) {
        event.preventDefault();
        this.navigatetoSpotShow();
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
