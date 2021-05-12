import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => setChangedText(prevState => !prevState);
  return (
    <>
      <h2>Welcome</h2>
      <p>First test page</p>
      {/* integration test */}
      {changedText && <Output>Toggled</Output>}
      <button onClick={changeTextHandler}>Toggle Text</button>
    </>
  );
};
export default Greeting;
