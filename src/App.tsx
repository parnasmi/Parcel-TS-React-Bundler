import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const theme = useState("darkblue");
  return <h1>My Simple React Bundler by Parcel</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
