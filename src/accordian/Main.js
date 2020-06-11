import React from 'react'
import Accordian from './components/Accordian.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }
  handleShow = () => {
    this.setState({
      isOpen: true,
    })
  }
  handleHide = () => {
    this.setState({
      isOpen: false,
    })
  }
  render() {
    if (this.state.isOpen) {
      return (
        <div>
          <Accordian
            title="Javascript"
            text="JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data."
          />
          <button onClick={this.handleHide}>
            Show Less
          </button>

          <Accordian
            title="React"
            text="ReactJS is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
          />
          <button onClick={this.handleHide}>
            Show Less
          </button>
          <Accordian
            title="Node"
            text="Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser."
          />
          <button onClick={this.handleHide}>
            Show Less
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <Accordian title="Javascript" />
          <button onClick={this.handleShow}>
            Read More
          </button>
          <Accordian title="React" />
          <button onClick={this.handleShow}>
            Read More
          </button>

          <Accordian title="Node" />
          <button onClick={this.handleShow}>
            Read More
          </button>
        </div>
      )
    }
  }
}
export default App
