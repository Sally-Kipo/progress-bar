import React from "react";
import ProgressBar from "./Components/Progress-bar";
function App() {
  return (
    <div className="App">

    <div>
      <ProgressBar width={0} />
      <ProgressBar width={25} />
      <ProgressBar width={50} />
      <ProgressBar width={75} />
      <ProgressBar width={100} />
    </div>
    </div>
  );

 }

export default App;
