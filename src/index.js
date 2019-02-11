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
// var style = {
// 	backgroundColor: 'blue',
// 	color: 'white'
// }
// // ReactDOM.render(
// // 	<div style={style} id="hohohohoh">
// // 		<h1>Ho Ho Ho</h1>
// // 		<h5>I am coming, here!!!</h5>
// // 	</div>,
// // 	document.getElementById('root')
// // )

// //Lesson Day 2
// let bookData = {
// 	namee: "Harry Potter",
// 	year: 2008,
// 	author: "J.K.Rowling"
// }
// class Message extends Component{
// 	getYears = (lastYear) => {
// 		return lastYear - bookData.year
// 	}
// 	render(){
// 		const {clr, date, txt} = this.props
// 		return(
// 			<React.Fragment>
// 			<section>
// 				<h1 style = {{color: clr}}>{txt}</h1>
// 				<h4 style = {style} >Today is {date} </h4>
// 			</section>
// 			<section>
// 				<ul>
// 					<li>Book Name: {this.props.namee}</li>
// 					<li>Book Year: {this.props.year}</li>
// 					<li>Book Author: {this.props.author}</li>
// 					<li>Passed Years: {this.getYears(2019)}</li>
// 				</ul>
// 			</section>
// 			</React.Fragment>
// 		)
// 	}
// }
// render(
// 	<Message txt = "Lesson Day 2" clr = "blue" date = "16 January, 2019" 
// 	namee = {bookData.namee} year = {bookData.year} author = {bookData.author}/>,
// 	document.getElementById('root')
// )

//Lesson Day 3
// const Book = (props) => {
// 	return(
// 		<section>
// 			<h2>{props.namee}</h2>
// 			<h4>{props.year}</h4>
// 			<h4>{props.author}</h4>
// 		</section>
// 	)
// }
// render(
// 	<Book namee = {bookData.namee} year = {bookData.year} author = {bookData.author} />,
// 	document.getElementById('root')
// )

//Lesson Day 4 
var style = {
	color: 'red'
}
let booksList = [
	{
		namee: "Harry Potter",
		year: 2008,
		author: "J.K.Rowling"
	},
	{
		namee: "Twilight",
		year: 2006,
		author: "Stephany R."
	},	{
		namee: "Alchemist",
		year: 2012,
		author: "Paulo Coelho"
	},	{
		namee: "Carrie",
		year: 1995,
		author: "Steven King"
	},	{
		namee: "Pride and Prejudice",
		year: 1988,
		author: "Jane Austen"
	}
]
// const Book = (props) => {
// 	return(
// 		<section>
// 			<h2>{props.namee}</h2>
// 			<h4>{props.year}</h4>
// 			<h4>{props.author}</h4>
// 		</section>
// 	)
// }
// const Library = ({books}) => {
// 	return(
// 		<React.Fragment>
// 		<h1 style={style}>
// 			Welcome to the Library :)
// 		</h1>
// 		<div>
// 			{
// 				books.map(
// 					(bookData, i) => 
// 						<Book key = {i} namee = {bookData.namee} year = {bookData.year} author = {bookData.author}/>
// 				)
// 			}
// 		</div>
// 		</React.Fragment>
// 	)
// }


// render(
// 	<Library books = {booksList} />,
// 	document.getElementById('root')
// )

//Lesson Day 5
const Book = (props) => {
	return(
		<section>
			<h2>{props.namee}</h2>
			<h4>{props.year}</h4>
			<h4>{props.author}</h4>
		</section>
	)
}
class Library extends Component{
	constructor(props){
		super(props)
		this.state = {
			open: true
		}
	}
	render(){
		const {books} = this.props
		return(
			<React.Fragment>
			<h1 style={style}>
				The Library is {this.state.open ? 'open' : 'closed'}
			</h1>
			<div>
				{
					books.map(
						(bookData, i) => 
							<Book key = {i} namee = {bookData.namee} year = {bookData.year} author = {bookData.author}/>
					)
				}
			</div>
			</React.Fragment>
		)
	}
}

render(
	<Library books = {booksList} />,
	document.getElementById('root')
)