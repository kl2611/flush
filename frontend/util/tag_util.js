var TagActions = require('../actions/tag_actions');

var TagUtil = {
    fetchTags: function() {
        $.ajax({
            url: 'api/tags',
            success: function(tags) {
                TagActions.receiveAllTags(tags);
            }
        });
    },

    createTag: function(tag) {
        $.ajax({
            url: 'api/tags',
            dataType: 'json',
            type:  'POST',
            data: {tag: tag},
            success: function(tag) {
                TagActions.receiveSingleTag(Tag);
            }
        });
    },

    fetchQueryTags: function(query) {
        $.ajax({
            url: 'api/tags',
            dataType: 'json',
            data: {query: query},
            success: function(tags) {
                TagActions.receiveQueryTags(tags);
            }
        });
    },

    fetchRandomTags: function(number) {
        $.ajax({
            url: 'api/tags',
            dataType: 'json',
            data: {number: number},
            success: function(tags){
                TagActions.receiveAllTags(tags);
            }
        });
    }
};

module.exports = TagUtil;
