var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _reviews = [];
var _myReviews = [];
var _recentReviews = [];
var _userReviews = [];
var _spotReviews = [];
var currentReview = null;

var ReviewConstants = require('../constants/review_constants');
var ReviewStore = new Store(AppDispatcher);

var resetReviews = function(reviews){
    _reviews = reviews.slice(0);
    findMyReviews();
};

var resetUserReviews = function(newReviews) {
    _userReviews = newReviews;
};

var resetSpotReviews = function(newReviews) {
    _spotReviews = newReviews;
};

var addReview = function(newReview) {
    _reviews.push(newReview);
    findMyReviews();
    _recentReviews.splice(-1, 1);
    _recentReviews.unshift(newReview);
    _userReviews.push(newReview);
};

var updateReview = function(editedReview) {
    var targetId = editedReview.id;
    _reviews.forEach(function(review, idx) {
        if (review.id === targetId) {
            _reviews[idx] = editedReview;
        }
    });
    findMyReviews();

    _recentReviews.forEach(function(review, idx) {
        if (review.id === targetId) {
            _recentReviews.splice(idx, 1);
            _recentReviews.unshift(editedReview);
        }
    });

    if (_recentReviews.indexOf(editedReview) === -1) {
        _recentReviews.splice(-1, 1);
        _recentReviews.unshift(editedReview);
    }

    _userReviews.forEach(function(review, idx) {
        if (review.id === targetId) {
            _userReviews[idx] = editedReview;
        }
    });
};

var deleteReview = function (deletedReview) {
    var targetId = deletedReview.id;
    var index;
    _reviews.forEach(function(review, idx) {
        if (review.id === targetId) {
            var index = idx;
        }
    });
    _reviews.splice(index, 1);

    var reviewIndex;
    _uesrReviews.forEach(function(review, idx) {
        if (review.id === targetId) {
            reviewIndex = idx;
        }
    });
    _userReviews.splice(reviewIndex, 1);
    findMyReviews();
};

var resetRecentReviews = function(reviews) {
    _recentReviews = reviews;
}

var findMyReviews = function () {
    var myReviews = [];
    _reviews.forEach(function(review) {
        if (review.belongsToCurrentUser) {
            myReviews.push(review);
        }
    });
    _myReviews = myReviews;
};

var findUserReviews = function (userId) {
    var userReviews = [];
    _reviews.forEach(function(review) {
        if (review.user_id === userId) {
            userReviews.push(review);
        }
    });

    return userReviews;
};

var findMySpotReview = function(spotId) {
    for (var i = 0; i < _myReviews.length; i++ ) {
        if (_myReviews[i].spot_id === spotId) {
            currentReview = _myReviews[i];
            break;
        }
    }
    return currentReview;
};

ReviewStore.__onDispatch = function(payload) {
    switch(payload.actionType) {
        case ReviewConstants.REVIEWS_RECEIVED:
            resetReviews(payload.reviews);
            ReviewStore.__emitChange();
            break;
        case ReviewConstants.REVIEW_RECEIVED:
            addReview(payload.review);
            ReviewStore.__emitChange();
            break;
        case ReviewConstants.UPDATE_REVIEW:
            updateReview(payload.review);
            ReviewStore.__emitChange();
            break;
        case ReviewConstants.DELETE_REVIEW:
            deleteReview(payload.review)
            ReviewStore.__emitChange();
            break;
        case ReviewConstants.RECEIVE_RANDOM_REVIEWS:
            resetRecentReviews(payload.reviews);
            ReviewStore.__emitChange();
            break;
        case ReviewConstants.RECEIVE_USER_REVIEWS:
            resetUserReviews(payload.reviews);
            ReviewStore.__emitChange();
            break;
        case ReviewConstants.RECEIVE_SPOT_REVIEWS:
            resetSpotReviews(payload.reviews);
            ReviewStore.__emitChange();
            break;
    }
};

ReviewStore.findBySpot = function() {
    return _spotReviews.slice(0);
};

ReviewStore.spotReviewsFromAll = function(spotId) {
    _itemSpotReviews = [];
    _reviews.forEach(function(review) {
        if (review.spot_id === spotId) {
            _itemSpotReviews.push(review);
        }
    });
    return _itemSpotReviews;
};

ReviewStore.findBySpotLimit = function() {
    return _spotReviews.slice(0, 3);
};

ReviewStore.findMySpotReview = function(spotId) {
    currentReview = undefined;
    for (var i = 0; i < _userReviews.length; i++ ) {
        if (_userReviews[i].spot_id === spotId) {
            currentReview = _userReviews[i];
            break;
        }
    }
    return currentReview;
};

ReviewStore.all = function() {
    return _reviews.slice(0);
};

ReviewStore.allMyReviews = function() {
    return _myReviews.slice(0);
};

ReviewStore.singleUserAllReviews = function() {
    return _userReviews.slice(0);
};

ReviewStore.averageRating = function() {
    totalRatings = 0;
    _spotReviews.forEach(function(review) {
        totalRatings += review.rating;
    });
    return (Math.round(totalRatings / _spotReviews.length * 2) / 2);
};

ReviewStore.recentReviews = function() {
    return _recentReviews.slice(0);
};

module.exports = ReviewStore;




