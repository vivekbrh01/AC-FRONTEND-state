import React from 'react'
import Accordian from './components/Accordian.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      javascript: false,
      react: false,
      node: false,
    }
  }
  handleClick = p => {
    return this.setState({[p]: !this.state[p]})
  }

  render() {
    // if (this.state.isOpen) {
    return (
      <div>
        <Accordian
          title="Javascript"
          text="JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data."
          isClicked={this.state.javascript}
        />
        <button
          onClick={() => this.handleClick('javascript')}
        >
          {this.state.javascript
            ? 'Show Less'
            : 'Show More'}
        </button>
        <hr></hr>
        <Accordian
          title="React"
          text="ReactJS is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
          isClicked={this.state.react}
        />
        <button onClick={() => this.handleClick('react')}>
          {this.state.react ? 'Show Less' : 'Show More'}
        </button>
        <hr></hr>
        <Accordian
          title="Node"
          text="Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."
          isClicked={this.state.node}
        />
        <button onClick={() => this.handleClick('node')}>
          {this.state.node ? 'Show Less' : 'Show More'}
        </button>
        <hr></hr>
      </div>
    )
  }
}
export default App
