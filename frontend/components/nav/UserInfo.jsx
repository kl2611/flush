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
    ApiUtil.fetchUser(CURRENT_USER);
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
    return(<Link to="">
              {this.state.username}
           </Link>
          );
  }
});

module.exports = UserInfo;
