//incorrect

import React, { useState, useEffect, useLayoutEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const doubled = useMemo(() => {
    return count * 2;
  }, []);

  const tripled = useMemo(() => {
    return count * 3; 
  }, []);

  
  const plusOne = useMemo(() => {
    return count + 1; 
  }, [count]);

  const timesFour = useMemo([count * 4], [count]);

  useEffect(() => {
    console.log('Count updated');
  }, [doubled, tripled, plusOne, timesFour]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {
        count++;
        setCount(count);
      }}>
        Increment  
      </button>
    </div>
  );

  useEffect(() => {
    console.log('Component mounted');
  })

  useLayoutEffect(() => {
    console.log('Count updated');
  }, [count]);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <div>
      <button onClick={handleClick}>
        Increment  
      </button>
    </div>
  );
}

export default MyComponent;
