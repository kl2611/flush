var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SpotConstants = require('../constants/spot_constants');
var SpotStore = new Store(AppDispatcher);

var _spots = [];
var _currentSpot = null;

SpotStore.__onDispatch = function (payload) {
switch(payload.actionType) {
    case SpotConstants.SPOTS_RECEIVED:
        resetSpots(payload.spots);
        SpotStore.__emitChange();
        break;
    case SpotConstants.SPOT_UPDATED:
        updateSpot(payload.spot);
        SpotStore.__emitChange();
        break;
    case SpotConstants.SPOT_RECEIVED:
        resetSpot(payload.spot);
        SpotStore.__emitChange();
    }
};

var resetSpots = function(spots){
    _spots = spots;
};

var updateSpot = function(newSpot) {
    _currentSpot = newSpot;
};

var resetSpot = function(newSpot) {
    _currentSpot = newSpot;
};

SpotStore.all = function () {
    return _spots.slice(0)
};

SpotStore.current = function() {
    return _currentSpot;
};

SpotStore.find = function (id) {
    for (i = 0; i < _spots.length; i++) {
        if (_spots[i].id === id) {
            return _spots[i];
        }
    }
};

module.exports = SpotStore;
