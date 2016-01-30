var SpotActions = require('../actions/spot_actions');

var TaggingUtil = {
    createTagging: function(tagging) {
        $.ajax({
            url: 'api/taggings',
            dataType: 'json',
            type: 'POST',
            data :{tagging: tagging},
            success: function(spot) {
                SpotActions.updateSingleSpot(spot);
            }
        });
    },

    deleteTagging: function(taggingId) {
        $.ajax({
            url: 'api/taggings/' + taggingId,
            dataType: 'json',
            data: {taggingId: taggingId},
            type: 'DELETE',
            success: function(spot) {
                SpotActions.updateSingleSpot(spot);
            }
        });
    }
};

module.exports = TaggingUtil;
