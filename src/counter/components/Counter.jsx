import React from "react";

class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};
	handleDecrement = () => {
		this.setState({ count: this.state.count - 1 });
	};
	handleReset = () => {
		this.setState({ count: 0 });
	};
	render() {
		return (
			<>
				<h1>{this.state.count}</h1>
				<button onClick={this.handleIncrement}>Increment</button>
				<button onClick={this.handleDecrement}>Decrement</button>
				<button onClick={this.handleReset}>Reset</button>
			</>
		);
	}
}
export default Counter;
