var AppDispatcher = require('../dispatcher/dispatcher');
var SpotConstants = require('../constants/spot_constants');

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
    }
};

module.exports = SpotActions;
