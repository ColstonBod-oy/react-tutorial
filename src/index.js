import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
	{
		id: 1,
		img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_US218_..jpg",
		title: "I Love You to the Moon and Back",
		author: "Amelia Hepworth",
	},

	{
		id: 2,
		img: "https://m.media-amazon.com/images/I/818qxyeFS-L._AC_US218_..jpg",
		title: "What Are Unicorns Made Of?",
		author: "Amelia Hepworth",
	},

	{
		id: 3,
		img: "https://m.media-amazon.com/images/I/71q5k7wq-CL._AC_US218_..jpg",
		title: "ROAR!: WARNING! This book is very NOISY!",
		author: "Amelia Hepworth",
	},
];

const BookList = () => {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
};

const Book = (props) => {
	const { img, title, author } = props;

	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
