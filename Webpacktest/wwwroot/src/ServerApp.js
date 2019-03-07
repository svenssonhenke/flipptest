import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './App.js';

export function Run(callback) {
    var str = ReactDomServer.renderToString(<App />);
    callback(null, str);
}