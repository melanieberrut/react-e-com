import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

/* This test reqires wraping App inside <StaticRouter> or a <MemoryRouter> to avoid errors related to context.
More about testing React Router: https://reacttraining.com/react-router/web/guides/testing
*/
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
