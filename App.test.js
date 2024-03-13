import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";

describe("Counter test suite", () => {
  it("Check that count text renders", () => {
    const { getByText } = render(<App />);
    const countText = getByText("count: 0");
    expect(countText).toBeTruthy();
  });

  it("Check that the count increases by one when the increment button is pressed", () => {
    // Place your code here...
  });
});
