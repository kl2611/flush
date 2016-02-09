var React = require('react');
var ReactRouter = require('react-router');
var ApiUtil = require('../../util/api_util');
var UserStore = require('../../stores/user');

var UserInfo = React.createClass({
  getInitialState: function() {
    return ({ reviewCount: null,
              currentUser: null
            });
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({reviewCount: newProps.reviewCount});
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onChange);
    ApiUtil.fetchUser(CURRENT_USER_ID);
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  onChange: function() {
    this.setState({currentUser: UserStore.user()});
  },


  render: function() {
    if (!this.state.currentUser) {
      userCard = <div></div>;
    } else {
      var userInfo = this.state.currentUser[0];
      var altTag = "current user avatar";
      var nameDisplay = userInfo.first_name + " " + userInfo.last_name[0] + ".";
      var reviewCount = this.state.reviewCount;
      if(reviewCount === 2) {
        reviews = reviewCount + " review";
      } else {
        reviews = reviewCount + " reviews";
      }

      userCard = <div>
                  <img src={userInfo.avatar.source}
                    alt={altTag}
                    height="90"
                    width="90">
                  </img>
                  <ul className="list-unstyled">
                    <li>{nameDisplay}</li>
                    <li>{userInfo.wanderer_title}</li>
                    <li>{reviews}</li>
                  </ul>
                </div>;
    }

    return (<div className="user-info-card">
              {userCard}
            </div>
          );
  }
});

module.exports = UserInfo;
