var React = require('react');
var ReactRouter = require('react-router');

var StarRating = React.createClass({
  componentDidMount: function() {
    $("#star-rating").rating({min: "0",
                            max: "5",
                            step: "1",
                            showClear: false,
                            showCaption: false,
                            readonly: true,
                            size: "xs"});
  },

  // componentWillReceiveProps: function(newProp) {
  //   $("#star-rating").rating('update', newProp.rating);
  // },

  render:function()  {
    if (isNaN(this.props.rating)) {
      ratingCount = "No rating yet!";
    } else {
      if(this.props.reviewCount === 1) {
        ratingCount = this.props.reviewCount + " review";
      } else {
        ratingCount = this.props.reviewCount + " reviews";
      }
    }

    return (
      <div>
        <ul className="list-unstyled">
          <table>
            <tbody>
              <tr>
                <td className="col">
                  <ul className="list-unstyled">
                    <li><input id="star-rating"
                           className="rating"
                           type="number"
                           min='1'
                           max='5'/>
                    </li>
                  </ul>
                </td>

                <td className="col">
                  <ul className="list-unstyled">
                    <li>{ratingCount}</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
    );
  }
});

module.exports = StarRating;
