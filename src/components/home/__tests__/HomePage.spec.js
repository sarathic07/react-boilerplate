import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import HomePage from "../HomePage";
import { findByTestAtrr } from "./../../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<HomePage {...props} />);
  return component;
};

describe("Home page", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "home-comp");
    expect(wrapper.length).toBe(1);
  });

  it("match snapshot", () => {
    const wrapper = shallow(<HomePage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("Should render without errors", () => {
    const wrapper = component.find(`.greet`);
    expect(wrapper.text()).toBe("Welcome!");
  });
});
