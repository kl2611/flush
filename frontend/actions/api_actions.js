var AppDispatcher = require('../dispatcher/dispatcher');
var SpotConstants = require('../constants/spot_constants');

ApiActions = {
    receiveAll: function(spots) {
        AppDispatcher.dispatch({
            actionType: SpottConstants.SPOTS_RECEIVED,
            spots: spots
        });
    }
}

module.exports = ApiActions;
