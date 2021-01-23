import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory</h2>
    <h5>Please sign in to manage your store's inventory.</h5>
    <button
      className="github"
      onClick={() => props.authenticate("Github")}
    >
      Log In With Github
    </button>
    <button
      className="twitter"
      onClick={() => props.authenticate("Twitter")}
    >
      Log In With Twitter
    </button>
    <button
      className="facebook"
      onClick={() => props.authenticate("Facebook")}
    >
      Log In With Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;
