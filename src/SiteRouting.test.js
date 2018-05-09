import React from "react";
import ReactDOM from "react-dom";

import SiteRouting from "./SiteRouting";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SiteRouting />, div);
  ReactDOM.unmountComponentAtNode(div);
});
