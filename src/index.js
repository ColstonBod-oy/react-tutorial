import React from "react";
import ReactDom from "react-dom";

const Test = () => {
	return (
		<div className="container">
			<h1>Testing...</h1>
			<ul>
				<li>
					<a href="#">Hello World</a>
				</li>
			</ul>
			<input type="text" name="textInput" id="reply" />
		</div>
	);
};

ReactDom.render(<Test />, document.getElementById("root"));
