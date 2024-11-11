import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';

// CSS
import "@node_modules/bootstrap/scss/bootstrap.scss"
import "@node_modules/bootstrap-icons/font/bootstrap-icons.scss"
import * as bootstrap from "bootstrap"
import "@src/global.css"
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
