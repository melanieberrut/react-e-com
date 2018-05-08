import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import SiteRouting from "./SiteRouting";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<SiteRouting />, document.getElementById("root"));
registerServiceWorker();
