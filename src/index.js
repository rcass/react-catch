import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

import NotFound from './components/NotFound';
import Inventory from './components/Inventory';
import Order from './components/Order';
import Fish from './components/Fish';
import Header from './components/Header';
import App from './components/App';
import StorePicker from './components/StorePicker';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}




render(<App />, document.querySelector('#main'));