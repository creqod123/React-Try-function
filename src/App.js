import { useState } from 'react';
import First from './components/first';
import { useEffect } from 'react';

function App() {

  const [first, setFirst] = useState(true)

  const checkFunction = (value) => {
    console.log('Value check :- ', value)
  }

  return (
    <div>
      <First para={first} checkThis={checkFunction}></First>
    </div>
  );
}

export default App;
