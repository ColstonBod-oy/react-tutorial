# React Fundamentals

Made by [Coding Addict](https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA).

## Stateless Functional Component

**Note: Always returns JSX.**

**Example:**

```javascript
const Test = () => {
	return React.createElement(
		"div",
		{},
		React.createElement("h1", {}, "Testing...")
	);
};
```

## JSX Rules

- return single element
- div/section/article or Fragment
- use camelCase for html attribute
- className instead of class
- close every element
- formatting

## Nested Components

**Example:**

```javascript
const Test = () => {
	return (
		<div className="container">
			<Status />
			<Link />
		</div>
	);
};

const Status = () => <h1>Testing...</h1>;
const Link = () => {
	return (
		<ul>
			<li>
				<a href="#">info</a>
			</li>
		</ul>
	);
};
```

## JSX CSS

**Example:**

```javascript
const Author = () => (
	<h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
		Amelia Hepworth
	</h4>
);
```

## JSX Javascript

**Note: Should always return a value, can't be a statement.**

**Example:**

```javascript
const Book = () => {
	const title = "I Love You to the Moon and Back";
	const author = "Amelia Hepworth";

	return (
		<h1>{title}</h1>
		<h4>{author}</h4>
	);
};
```

## Props

**Note: Add children props by not using self-closing tags.**

**Example:**

```javascript
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
```

## List

**Note: Each child in a list should have a unique "key" prop.**

**Example:**

```javascript
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
```

## Events

**Note: Use arrow functions on eventHandler when passing arguments to avoid being executed on mount.**

**Example:**

```javascript
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
```

## Import and Export

**Note: File extensions can be omitted when importing JS files. Can only have one default export. Non-default exports are imported with curly brackets and use the keyword "as" when renaming.**

**Example:**

`import "./index.css";`  
`import books from "./books";`  
`import {books as boardBooks} from "./books";`  
`export default books;`  
`export {books};`
