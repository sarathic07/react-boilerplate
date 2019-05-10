import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoginPage from "../LoginPage";
import { findByTestAtrr } from "./../../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<LoginPage {...props} />);
  return component;
};

describe("Login page", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "login-comp");
    expect(wrapper.length).toBe(1);
  });

  it("match snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it("check input elemnts", () => {
    const wrapper = component.find(`input`);
    expect(wrapper.length).toBe(3);
  });
});
