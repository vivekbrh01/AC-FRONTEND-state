import React from 'react'
import Heading from './components/Heading.jsx'
import Menu from './components/Menu.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
    }
  }

  showSidebar = () => {
    this.setState({
      isVisible: true,
    })
  }

  hideSidebar = () => {
    this.setState({
      isVisible: false,
    })
  }

  render() {
    if (this.state.isVisible) {
      return (
        <div className="hideSidebar">
          <Heading />
          <Menu />
          <button onClick={this.hideSidebar}>Hide</button>
        </div>
      )
    } else {
      return (
        <div className="hideSidebar">
          <Heading />
          <button onClick={this.showSidebar}>Show</button>
        </div>
      )
    }
  }
}

export default App
