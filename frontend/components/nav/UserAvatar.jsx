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
    if (UserStore.user()[0].avatar === undefined) {
      this.setState({
        avatar: "https://res.cloudinary.com/kellyliu/image/upload/v1455063173/swirl.jpg"
      })
    } else {
      this.setState({
          avatar: UserStore.user()[0].avatar.source,
      });
    }
  },

  render: function(){
    if (this.state.avatar === undefined) {
      imgSrc = "https://res.cloudinary.com/kellyliu/image/upload/v1455063173/swirl.jpg"
    } else if (this.state.avatar) {
      imgSrc = this.state.avatar
    } else {
      imgSrc = "https://res.cloudinary.com/kellyliu/image/upload/v1455063173/swirl.jpg"
    }

    return(<img src={imgSrc}
                alt="User Avatar"
                height="40"
                width="40" />
          );
  }
});

module.exports = UserAvatar;
