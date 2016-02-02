var AppDispatcher = require('../dispatcher/dispatcher.js');
var MapConstants = require('../constants/map_constants');

var MapActions = {
    mapsReady: function() {
        AppDispatcher.dispatch({
            actionType: MapConstants.MAPS_READY
        });
    }
}

module.exports = MapActions;
