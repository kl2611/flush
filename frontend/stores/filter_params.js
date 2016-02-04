var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var _params = {};
var FilterConstants = require('../constants/filter_constants');

var FilterParamsStore = new Store(AppDispatcher);

// var _currentParams = {
//     bounds: null
// };

// var _updateBounds = function(bounds) {
//     _currentParams.bounds = bounds;
// }

FilterParamsStore.params = function () {
    return Object.assign({}, _params);
};

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case FilterConstants.UPDATE_BOUNDS:
      _params.bounds = payload.bounds;
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
