import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {Mylabel,Lister,AppRouter} from './lister.js'

// ========================================

ReactDOM.render(
  <div>
    <AppRouter />
  </div>
  ,
  document.getElementById('root')
);
