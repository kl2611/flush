// var React = require('react');
// var ReactRouter = require('react-router');
// var ReviewUtil = require('../../util/review_util');
// var ReviewStore = require('../../stores/review');
// var ReviewIndexItem = require('./ReviewsIndexItem');


// var ReviewIndex = React.createClass({
//     getInitialState: function() {
//         return ({ allReviews: [] });
//     },

//     componentDidMount: function() {
//         reviewListener = ReviewStore.addListener(this.onChange);
//         ReviewUtil.fetchReviews();
//     },

//     componentWillUnmount: function() {
//         reviewListener.remove();
//     },

//     onChange: function() {
//         this.setState({ allReviews: ReviewStore.all() });
//     },

//     render: function() {
//         var reviews = this.props.reviews;

//         if (reviews.length === 0) {
//             reviewDisplay = <div>You are the first to review</div>
//         } else {
//             reviewDisplay = <div>
//                 {this.state.reviews.map(function(review) {
//                     return <ReviewIndexItem key={review.id} {...review} reviewCount={reviewCount} />;
//                 })}
//             </div>
//         }

//         return (
//             <div>{reviewDisplay}</div>
//         );
//     }
// });

// module.exports = ReviewIndex;
