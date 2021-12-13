import { render, screen } from "@testing-library/react";
import App from "./App";
import {  shallow } from "enzyme";

// render(<App />);
// const linkElement = screen.getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();
describe("testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders a title", () => {
    expect(wrapper.find("h1").text()).toContain("Testing Enzyme");
  });

  test("renders a button", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test("renders a initial value of a state", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("renders the click event of increment button ", () => {
    wrapper.find("#increment-btn").simulate('click')
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  test("renders the click event of increment button ", () => {
    wrapper.find("#decrement-btn").simulate('click')
    expect(wrapper.find("#counter-value").text()).toBe("-1");
  });
});
