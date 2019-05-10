import React from "react";
import PropTypes from "prop-types";

const HomePage = props => {
  return (
    <div data-test={"home-comp"}>
      <div className={"greet"}>{"Welcome!"}</div>
      <input type={"button"} value={"Logout"} onClick={props.logout} />
    </div>
  );
};

HomePage.propTypes = {
  logout: PropTypes.func
};

export default HomePage;
