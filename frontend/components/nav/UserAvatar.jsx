var React = require('react');
var ReactRouter = require('react-router');
var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/api_util');
var Link = ReactRouter.Link;

var UserAvatar = React.createClass({
  getInitialState: function(){
    return ({
      avatar: ""
    });
  },

  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.change);
    ApiUtil.fetchUser(CURRENT_USER_ID);
  },

  componentWillUnmount: function(){
    this.userListener.remove();
  },

  change: function(){
    this.setState({
      avatar: UserStore.user()[0].avatar.source,
    });
  },

  render: function(){
    return(<img src={this.state.avatar}
                alt="User Avatar"
                height="60"
                width="60">
           </img>
          );
  }
});

module.exports = UserAvatar;
