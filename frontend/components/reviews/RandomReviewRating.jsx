var React = require('react');
var ReactRouter = require('react-router');

var RandomReviewRating = React.createClass({
  componentDidMount: function() {
    $("#random-review-rating").rating({min: "0",
                                  max: "5",
                                  step: "1",
                                  showClear: false,
                                  showCaption: false,
                                  readonly: true,
                                  size: "xxs"});
  },

  componentWillReceiveProps: function(newProp) {
    $("#random-review-rating").rating('update', newProp.rating);
  },

  render: function()  {
    return (
      <div>
        <ul className="list-unstyled">
          <li>
            <input id="random-review-rating"
                   className="rating"
                   type="number"
                   min='1'
                   max='5'/>
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = RandomReviewRating;
