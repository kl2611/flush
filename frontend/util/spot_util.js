var SpotActions = require('../actions/spot_actions.js');

var SpotUtil = {
    fetchSpots: function() {
        $.ajax({
            url: 'api/spots',
            success: function(spots) {
                SpotActions.receiveAllSpots(spots);
            }
        });
    },

    updateSingleSpot: function(id){
        $.ajax({
            url: 'api/spots/' + id,
            success: function(spot) {
                SpotActions.updateSingleSpot(spot);
            }
        });
    },

    fetchSingleSpot: function(id) {
        $.ajax({
            url: 'api/spots/' + id,
            success: function(spot) {
                SpotActions.receiveSingleSpot(spot);
            }
        });
    }
};

module.exports = SpotUtil;
