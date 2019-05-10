import React from "react";
import PropTypes from "prop-types";
import HomePage from "./HomePage";

//Configure the UI layout here
class HomeView extends React.Component {
  render() {
    return <HomePage user={this.props.user} logout={this.props.logout} />;
  }
}

HomeView.propTypes = {
  user: PropTypes.array,
  logout: PropTypes.func
};

export default HomeView;
