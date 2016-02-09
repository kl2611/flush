var React = require('react');
var ReactRouter = require('react-router');
var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/api_util');
var Link = ReactRouter.Link;

var UserInfo = React.createClass({
  getInitialState: function(){
    return ({
      username: "",
      userlink: ""
    });
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.change);

    if (CURRENT_USER_ID) {
      ApiUtil.fetchUser(CURRENT_USER_ID);
    }
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  change: function(){
    this.setState({
      username: UserStore.user()[0].username,
      userlink: "/#/users" + UserStore.user()[0].id
    });
  },

  render: function(){
    var userInfo;
    userinfo = <div />

    if (!CURRENT_USER_ID) {
      userInfo = <div />
    } else {
      userInfo = <div className="user-info">
          <div className="user-info-top">
            <div id="user-info-name">
              <h4><Link to="">{this.state.username}</Link></h4>
            </div>
          </div>

      </div>
    }

    return(
      <div>{userInfo}</div>
    );
  }
});

module.exports = UserInfo;
