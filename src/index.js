import React from 'react';
import { render } from 'react-dom';
import './css/style.css';

import Inventory from './components/Inventory';
import Order from './components/Order';
import Fish from './components/Fish';
import Header from './components/Header';
import App from './components/App';
import StorePicker from './components/StorePicker';

render(<App />, document.querySelector('#main'));