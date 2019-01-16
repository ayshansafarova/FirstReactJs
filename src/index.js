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

import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

//START
// const title = React.createElement(
// 	'h2', //element
// 	{id: 'title', className: 'header', style: style}, 
// 	'Congrats!!!' //text
// )
// ReactDOM.render(
// 	title, //which we will run
// 	document.getElementById('root')
// )

//Lesson Day 1
var style = {
	backgroundColor: 'blue',
	color: 'white'
}
// ReactDOM.render(
// 	<div style={style} id="hohohohoh">
// 		<h1>Ho Ho Ho</h1>
// 		<h5>I am coming, here!!!</h5>
// 	</div>,
// 	document.getElementById('root')
// )

//Lesson Day 2
let bookData = {
	namee: "Harry Potter",
	year: 2008,
	author: "J.K.Rowling"
}
class Message extends Component{
	getYears = (lastYear) => {
		return lastYear - bookData.year
	}
	render(){
		const {clr, date, txt} = this.props
		return(
			<React.Fragment>
			<section>
				<h1 style = {{color: clr}}>{txt}</h1>
				<h4 style = {style} >Today is {date} </h4>
			</section>
			<section>
				<ul>
					<li>Book Name: {this.props.namee}</li>
					<li>Book Year: {this.props.year}</li>
					<li>Book Author: {this.props.author}</li>
					<li>Passed Years: {this.getYears(2019)}</li>
				</ul>
			</section>
			</React.Fragment>
		)
	}
}
render(
	<Message txt = "Lesson Day 2" clr = "blue" date = "16 January, 2019" 
	namee = {bookData.namee} year = {bookData.year} author = {bookData.author}/>,
	document.getElementById('root')
)