import React from 'react';
import ReactDOM from 'react-dom/client';

const parnet = React.createElement(
  'div', 
  { id : "parnet"}, 
  [
    React.createElement('div', { id: "child1", key: '1' },
      [
        React.createElement('h1', {key: '1.1'}, 'I am h1 Tag'),
        React.createElement('h2', { key: '1.2' } , "I am h2 Tag")
      ]
    ),
    React.createElement('div', { id: "child2", key:'2' },
      [
        React.createElement('h1', { key: '2.1' }, 'I am h1 Tag'),
        React.createElement('h2', { key: '2.2' }, "I am h2 Tag")
      ]
    )
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parnet);