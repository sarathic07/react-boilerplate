import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router";
import Loadable from "react-loadable";
import { ProfileContext } from "./components/context";
import configureStore from "./configureStore";
import { GET_MY_INFO_REQUESTED } from "./actions/user";

const createHistory = require("history").createBrowserHistory;

/* eslint-disable react/display-name */
const LoadComponent = component =>
  Loadable({
    loader: component,
    loading: () => <div>Loading...</div>
  });

const LoginContainer = LoadComponent(() =>
  import("./components/login/LoginContainer")
);
const HomeContainer = LoadComponent(() =>
  import("./components/home/HomeContainer")
);

const history = createHistory();
const store = configureStore(history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRoot />
      </Provider>
    );
  }
}

const PrivateRoute = ({ component: Component, authenticated, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  authenticated: PropTypes.bool,
  location: PropTypes.object
};

const PublicRoute = ({ component: Component, authenticated, ...props }) => {
  return (
    <Route
      {...props}
      render={props =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  );
};
PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  authenticated: PropTypes.bool
};

class Root extends Component {
  componentDidMount() {
    this.props.getMyInfo();
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          {!this.props.authenticated && (
            <Switch>
              <PublicRoute
                authenticated={this.props.authenticated}
                path={"/login"}
                component={LoginContainer}
              />
              <Route path={"/"} render={() => <Redirect to={"/login"} />} />
            </Switch>
          )}
          {this.props.authenticated && (
            <ProfileContext.Provider value={this.props.user}>
              <Switch>
                <PrivateRoute
                  authenticated={this.props.authenticated}
                  exact
                  path={"/dashboard"}
                  component={HomeContainer}
                />
                <Route
                  path={"/"}
                  render={() => <Redirect to={"/dashboard"} />}
                />
              </Switch>
            </ProfileContext.Provider>
          )}
        </Switch>
      </Router>
    );
  }
}

Root.propTypes = {
  getMyInfo: PropTypes.func,
  authenticated: PropTypes.bool,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
    authenticated: state.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMyInfo: () => dispatch({ type: GET_MY_INFO_REQUESTED })
  };
};

const ConnectedRoot = connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

export default App;
