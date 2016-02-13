var React = require("react");
var History = require("react-router").History;

var Footer = React.createClass({
  mixins: [History],

  goToHome: function () {
    this.history.pushState(null, "/");
  },

  render: function () {
    return (
      <footer className="footer hide-mobile">
        <section className="footer-wrapper container">
          <ul className="footer-nav">
            <a className="logo" onClick={ this.goToHome }>Flushr</a>
          </ul>

          <ul className="footer-nav">
            <h5>COMPANY</h5>
            <li><a>About</a></li>
            <li><a>Careers</a></li>
            <li><a>Press</a></li>
          </ul>

          <ul className="footer-nav">
            <h5>DISCOVER</h5>
            <li><a>Flushr Blog</a></li>
            <li><a>Support</a></li>
            <li><a>Developers</a></li>
          </ul>

          <ul className="footer-nav">
            <h5>CONTACT</h5>
            <li>
              <a target="_blank" href="https://github.com/kl2611">
                GitHub
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.linkedin.com/in/kellyliu1">
                LinkedIn
              </a>
            </li>

          </ul>
        </section>
      </footer>
    );
  }
});

module.exports = Footer;
