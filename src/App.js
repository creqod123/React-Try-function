import { useState } from 'react';
// import First from './components/first';
import { useEffect } from 'react';
import browser from 'webextension-polyfill';

function App() {

  const [first, setFirst] = useState(true)

  const checkFunction = (value) => {
    console.log('Value check :- ', value)
  }

  useEffect(() => {

    new Promise((resolve, reject) => {
      if (typeof browser !== 'undefined' && typeof browser.runtime !== 'undefined') {
        const action = 'GREETING';
        const data = { name: 'John' };
        console.log('First')
        browser.runtime.sendMessage({ action, data })
          .then(response => {
            resolve(response.reply);
          })
          .catch(error => {
            reject(error);
          });
        console.log('second')
      } else {
        reject("This code should only run in a browser extension environment.");
      }
    })

  }, [])

  return (
    <div>
      {/* <First para={first} checkThis={checkFunction}></First> */}
    </div>
  );
}

export default App;
