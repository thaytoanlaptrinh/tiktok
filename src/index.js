import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './component/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Router>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </Router>,
    // </React.StrictMode>
);

reportWebVitals();
