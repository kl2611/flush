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

    componentDidMount: function() {
        $("#input-id").rating({
                                    showClear: false,
                                    showCaption: false
                                    });
        $("#input-id").rating('update', this.state.rating);
        $('#input-id').on('rating.change', function(event, value, caption) {
        this.setState({rating: value});
        }.bind(this));
    },

    componentWillUnmount: function() {
        $('#input-id').off('rating.change', function(event, value, caption) {
            this.setState({rating: value});
        });
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
        location.reload();
    },

    render: function () {
        return (
            <div className = "review-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Rating</label>
                    <br />
                    <input id="input-id"
                        type="number"
                        className="rating"
                        min='1' max='5'
                        step='1'
                        data-size="xs" />
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
