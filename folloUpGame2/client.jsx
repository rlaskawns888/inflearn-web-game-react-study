const React = require('react');
// const ReactDOM = require('react-dom');
const ReactDOM = require('react-dom/client');

const FollowUp = require('./followup');

// ReactDOM.render(<FollowUp />, document.querySelector('#root'));
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<FollowUp />);