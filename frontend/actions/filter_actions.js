var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_BOUNDS,
      bounds: bounds
    });
  }
};

module.exports = FilterActions;
