import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  // Increment by 1
  // handleIncrement = () => {
  // this.setState({count: this.state.count + 1})
  // }

  // Increment by 2
  handleIncrement = () => {
    this.setState(function (state) {
      if (state.count <= 11) {
        return {
          count: state.count + 2,
        }
      } else if (state.count > 11) {
        return {
          count: state.count + 100,
          // Window.alert("You can't increase the value above 12")
        }
      }
    })
  }

  // Decrement by 1
  // handleDecrement = () => {
  //   this.setState({count: this.state.count - 1})
  // }

  // Decrement by 2
  handleDecrement = () => {
    this.setState(function (state) {
      if (state.count >= 1) {
        return {
          count: state.count - 2,
        }
      } else if (state.count < 1) {
        return {
          // window.alert("You can't increase the value above 12")
        }
      }
    })
  }
  handleReset = () => {
    this.setState({count: 0})
  }
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>
          Increment
        </button>
        <button onClick={this.handleDecrement}>
          Decrement
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    )
  }
}
export default Counter
