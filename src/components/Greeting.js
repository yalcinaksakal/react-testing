import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => setChangedText(prevState => !prevState);
  return (
    <>
      <h2>Welcome</h2>
      <p>First test page</p>
      {changedText && <p>Toggled</p>}
      <button onClick={changeTextHandler}>Toggle Text</button>
    </>
  );
};
export default Greeting;
