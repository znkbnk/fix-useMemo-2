//correct

import React, { useState, useEffect, useCallback } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const doubled = useMemo(() => {
    return count * 2;
  }, [count]);

  const tripled = useMemo(() => {
    return count * 3;
  }, [count]);

  const plusOne = count + 1;

  const timesFour = useMemo(() => {
    return count * 4;
  }, [count]);

  useEffect(() => {
    console.log("Count updated");
  }, [count]);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p key='countText'>Count: {count}</p>
      <button key='incrementBtn' onClick={handleClick}>
        Increment
      </button>
    </div>
  );

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count updated");
  }, [count]);

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
