import React from 'react';
import component from 'omniscient';


const App = component('App', ({ message }) => {
  return (
    <div className="hello-world">{message.deref()}</div>
  );
});


export default App;
