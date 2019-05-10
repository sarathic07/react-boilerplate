import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeView from "./HomeView";
import { LOGOUT_USER_REQUESTED } from "../../actions/user";

class HomeContainer extends React.Component {
  render() {
    return <HomeView user={this.props.user} logout={this.props.logout} />;
  }
}

HomeContainer.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

const mapStateToProps = state => {
  return {
    user: state.user.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: LOGOUT_USER_REQUESTED })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
