// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// var browser = require("set-default-browser");
// browser("chrome");

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

var style = {
	backgroundColor: 'blue',
	color: 'white'
}

// const title = React.createElement(
// 	'h2', //element
// 	{id: 'title', className: 'header', style: style}, 
// 	'Congrats!!!' //text
// )

// ReactDOM.render(
// 	title, //which we will run
// 	document.getElementById('root')
// )

ReactDOM.render(
	<div style={style} id="hohohohoh">
		<h1>Ho Ho Ho</h1>
		<h5>I am coming, here!!!</h5>
	</div>,
	document.getElementById('root')
)