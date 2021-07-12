import React from "react";

const Book = (props) => {
	const { img, title, author } = props;
	const clickHandler = (title, author) => {
		alert(`${title}\nby ${author}\n\n✓Book Added`);
	};

	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			<button type="button" onClick={() => clickHandler(title, author)}>
				Add
			</button>
		</article>
	);
};

export default Book;
