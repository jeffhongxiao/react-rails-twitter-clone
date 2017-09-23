import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/Index';

const documentReady = () => {
  const reactNode = document.getElementById("react");
  if (reactNode) {
    ReactDOM.render(<Index />, reactNode);
  }
  else {
    console.log('may need to login');
  }
}

$(documentReady);
