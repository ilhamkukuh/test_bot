import * as React from "react";
import "./App.css";

function App() {
  const [_count, _setCount] = React.useState(0);
  return (
    <>
      <h1>HamCoin</h1>
      <div className="card">
        <h3>Soon.</h3>
        <p>First stable coin tap in</p>
      </div>
      <p className="read-the-docs">
        Creating inclusive and innovative digital ecosystems, everywhere
        individuals can leverage blockchain technology to improve their quality
        of life. We are committed to continuing to develop and improving HamCoin
        so that it can meet continuing market needs develop.
      </p>
    </>
  );
}

export default App;
