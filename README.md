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
