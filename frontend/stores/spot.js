var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _spots = [];
var _currentSpot = null;
var SpotStore = new Store(AppDispatcher);
var SpotConstants = require('../constants/spot_constants');

SpotStore.all = function () {
    return _spots.slice(0)
};

window.SpotStore = SpotStore;
module.exports = SpotStore
