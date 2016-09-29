import React, { PropTypes } from 'react';

const App = function App(props) {
  return (<div className="container main">{props.children}</div>);
};

App.propTypes = {
  children: PropTypes.object
};


export default App;
