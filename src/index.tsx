import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/index';

import "./style";

const root = document.getElementById("root"),
    app = <Router><App/></Router>

render(app, root);