var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

// components
var SpotForm = require('./components/spots/SpotsForm');
var SpotsSearch = require('./components/spots/SpotsSearch');
var SpotShow = require('./components/spots/SpotsShow');
var ReviewForm = require('./components/reviews/ReviewsForm');
var Review = require('./components/reviews/Review');

var SearchIndex= require('./components/home/SearchIndex');
var LandingPage = require('./components/home/LandingPage');
var MapActions = require('./actions/map_actions');

var NavBar = require('./components/nav/Navbar');
var SearchBar = require('./components/nav/Search');

var App = React.createClass({
  render: function() {
    return (
        <div id="index">
          <NavBar history={this.props.history} location={this.props.location} />
          <div className = "container below-nav">
            {this.props.children}
          </div>
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="/search/:loc" component={SearchIndex} />
    <Route path="spots/new" component={SpotForm} />
    <Route path="spots/:spotId" component={SpotShow}>
      <Route path="review" components={ReviewForm} />
    </Route>
  </Route>
);

var checkLibStatus = function() {
  if (window.MapsStatus) {
    MapActions.mapsReady();
  } else {
    document.getElementById('map').addEventListener('load', MapActions.mapsReady);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // checkLibStatus();
  var root = document.getElementById('root');
  ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, root);
});
