var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var SpotIndex = require('./components/spots/SpotsIndex');
var SpotsSearch = require('./components/spots/SpotsSearch');
var Map = require('./components/spots/Map');

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

// var routes = (
//   <Route path="/" component={App}>
//     <IndexRoute component={SpotsSearch} />
//   </Route>
// );

document.addEventListener('DOMContentLoaded', function() {
  var root = document.getElementById('root');
  ReactDOM.render(<SpotsSearch />, root);
});
