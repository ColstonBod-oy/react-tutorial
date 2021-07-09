import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
	img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_US218_..jpg",
	title: "I Love You to the Moon and Back",
	author: "Amelia Hepworth",
};

const secondBook = {
	img: "https://m.media-amazon.com/images/I/818qxyeFS-L._AC_US218_..jpg",
	title: "What Are Unicorns Made Of?",
	author: "Amelia Hepworth",
};

const thirdBook = {
	img: "https://m.media-amazon.com/images/I/71q5k7wq-CL._AC_US218_..jpg",
	title: "ROAR!: WARNING! This book is very NOISY!",
	author: "Amelia Hepworth",
};

const BookList = () => {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			>
				<p>
					Show a child just how strong your love is every minute of the day!
					Features a "To" and "From" personalization page, making this sweet
					offering an ideal gift for baby showers, birthdays, and new parents.
				</p>
			</Book>
			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
			/>
			<Book
				img={thirdBook.img}
				title={thirdBook.title}
				author={thirdBook.author}
			/>
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
			{props.children}
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
