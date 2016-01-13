var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// components required here
var SpotsSearchIndex = require('./components/spots/spotsSearchIndex');
var Home = require('./components/home/home');
var SpotStore = require('./stores/spot');
var TagStore = require('./stores/tag');
var TagUtil = require('./util/tag_util');
var ReviewStore = require('./stores/review');
var SpotDetail = require('./components/spots/spotDetail');
var App = require('./components/app');
var SpotRequestForm = require('./components/spots/spotRequest');

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='spot/request' component={SpotRequestForm} />
    <Route path='spots/search'  component={SpotsSearchIndex} />
    <Route path='spot/:spotId' component={SpotDetail} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
