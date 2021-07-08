import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const BookList = () => {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	const title = "I Love You to the Moon and Back";
	const author = "Amelia Hepworth";

	return (
		<article className="book">
			<img
				src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
				alt=""
			/>
			<h1>{title}</h1>
			<h4>{author.toUpperCase()}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById("root"));
