import React from "react";
import PropTypes from "prop-types";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  inputChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  onSubmit() {
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  }

  render() {
    return (
      <div data-test={"login-comp"}>
        <input
          className={"form-control"}
          name={"email"}
          type="text"
          onChange={this.inputChange}
        />
        <input
          className={"form-control"}
          name={"password"}
          type="password"
          onChange={this.inputChange}
        />
        <input
          className={"form-control"}
          type="button"
          value={"Login"}
          onClick={this.onSubmit}
        />
        <div>{this.props.error}</div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  error: PropTypes.string,
  login: PropTypes.func
};

export default LoginPage;
