var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var FilterConstants = require('../constants/filter_constants');


var FilterParamsStore = new Store(AppDispatcher);

FilterParamsStore.params = function () {
    return Object.assign({});
};

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case FilterConstants.UPDATE_BOUNDS:
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
