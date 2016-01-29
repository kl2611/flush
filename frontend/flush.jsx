var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

// components
var SpotForm = require('./components/spots/SpotsForm');
var SpotsSearch = require('./components/spots/SpotsSearch');
var SpotShow = require('./components/spots/SpotsShow');
var ReviewForm = require('./components/reviews/ReviewsForm');
var Review = require('./components/reviews/Review');
var Home = require('./components/home/Home');

var App = React.createClass({
  render: function() {
    return (
      <div className="container below-nav">
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SpotsSearch} />
    <Route path="spots/search" component={SpotsSearch} />
    <Route path="spots/new" component={SpotForm} />
    <Route path="spots/:spotId" component={SpotShow}>
        <Route path="review" components={ReviewForm} />
    </Route>
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
