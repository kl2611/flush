var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MapConstants = require('../constants/map_constants');

var MapStore = new Store(AppDispatcher);

var _extLib = {
    maps: false
}

MapStore.isReady = function(lib) {
    return _extLib[lib];
};

MapStore.__onDispatch = function(payload) {
    switch(payload.actionType) {
        case MapConstants.MAPS_READY:
            _extLib.maps = true;
            console.log("google maps is ready");
            MapStore.__emitChange();
            break;
    }
};

module.exports = MapStore;
