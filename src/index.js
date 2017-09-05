import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './routes.js'
ReactDOM.render((<Router>
          <AppRoutes />
        </Router>), document.getElementById('root'));
registerServiceWorker();
