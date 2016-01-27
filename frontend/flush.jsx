var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var root = document.getElementById('root')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var SpotForm = require('./components/spots/SpotsForm');
var SpotsSearch = require('./components/spots/SpotsSearch');
var SpotShow = require('./components/spots/SpotsShow');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>Flush</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={SpotsSearch} />
    <Route path="spots/new" component={SpotForm} />
    <Route path="spots/:spotId" component={SpotShow} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
