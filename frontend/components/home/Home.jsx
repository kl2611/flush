var React = require('react');
var Searchbar = require('../nav/Search');

var Home = React.createClass({
    render: function() {
        var bgImage= <img src="http://res.cloudinary.com/kellyliu/image/upload/v1455076699/homeimage.jpg" width="1000"/>

        var bgImageDiv = (
            <div className="full-bg animated animated-alternate animated-infinite fadeIn">
                {bgImage}
            </div>
        );

        return (
            <div className="jumbotron" id="landing-page">

                <h1>FIND PUBLIC RESTROOMS</h1>
                <h4>Wherever in the world you may be</h4>

                <Searchbar history={this.props.history}/>
            </div>
        );
    }
});

module.exports = Home;
