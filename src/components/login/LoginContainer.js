import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginView from "./LoginView";
import { LOGIN_USER_REQUESTED } from "../../actions/user";

class LoginContainer extends React.Component {
  render() {
    return <LoginView error={this.props.error} login={this.props.login} />;
  }
}

LoginContainer.propTypes = {
  error: PropTypes.string,
  login: PropTypes.func
};

const mapStateToProps = state => {
  return {
    error: state.user.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: login =>
      dispatch({ type: LOGIN_USER_REQUESTED, payload: { ...login } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
