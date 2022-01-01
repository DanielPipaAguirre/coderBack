import React from "react";

import { render } from "setupTests";
import ShoppingCartProduct from "./ShoppingCartProduct";

describe("ShoppingCartProduct", () => {
  it("renders with default props", () => {
    render(<ShoppingCartProduct />);
  });
});
