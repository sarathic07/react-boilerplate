import React from "react";
import PropTypes from "prop-types";
import LoginPage from "./LoginPage";

//Configure the UI layout here
class LoginView extends React.Component {
  render() {
    return <LoginPage error={this.props.error} login={this.props.login} />;
  }
}

LoginView.propTypes = {
  error: PropTypes.string,
  login: PropTypes.func
};

export default LoginView;
