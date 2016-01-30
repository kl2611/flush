var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var TagStore = new Store(AppDispatcher);
var TagConstants = require('../constants/tag_constants');

var _tags = [];
var _queriedTags = [];

var resetTags = function(newTags) {
    _tags = newTags;
};

var addTag = function(newTag) {
    _tags.push(newTag);
};

var resetQueriedTags = function(newTags) {
    _queriedTags = newTags;
};

TagStore.__onDispatch = function(payload) {
    switch(payload.actionType) {
        case TagConstants.TAGS_RECEIVED:
            resetTags(payload.tags);
            TagStore.__emitChange();
            break;
        case TagConstants.TAG_RECEIVED:
            addTag(payload.tag);
            TagStore.__emitChange();
            break;
        case TagConstants.QUERIED_TAGS_RECEIVED:
            resetQueriedTags(payload.tags);
            TagStore.__emitChange();
            break;
    }
};

TagStore.find = function(tagName) {
    for (var tag in _tags) {
        if (tag.name === tagName) {
            return (tag.id);
        }
    }
};

TagStore.all = function() {
    return _tags.slice(0);
};

TagStore.queriedTags = function() {
    return _queriedTags.slice(0);
}

module.exports = TagStore;
