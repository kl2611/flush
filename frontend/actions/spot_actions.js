var AppDispatcher = require('../dispatcher/dispatcher');
var SpotConstants = require('../constants/spot_constants');
var SpotUtil = require('../util/spot_util.js');

var SpotActions = {
    receiveAllSpots: function(spots) {
        AppDispatcher.dispatch({
            actionType: SpotConstants.SPOTS_RECEIVED,
            spots: spots
        });
    },

    receiveSingleSpot: function(spot) {
        AppDispatcher.dispatch({
            actionType: SpotConstants.SPOT_RECEIVED,
            spot: spot
        });
    },

    updateSingleSpot: function(spot) {
        AppDispatcher.dispatch({
            actionType: SpotConstants.SPOT_UPDATED,
            spot: spot
        });
    },

    receiveFilteredSpots: function(spots) {
        AppDispatcher.dispatch({
            actionType: SpotConstants.SPOTS_RECEIVED,
            spots: spots
        });
    }
};

module.exports = SpotActions;
