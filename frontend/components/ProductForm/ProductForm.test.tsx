import React from "react";

import { render } from "setupTests";
import ProductForm from "./ProductForm";

describe("ProductForm", () => {
  it("renders with default props", () => {
    render(<ProductForm />);
  });
});
