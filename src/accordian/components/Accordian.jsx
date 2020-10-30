import React from 'react'

class Accordian extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="section">
        <h3> {this.props.title}</h3>
        {(this.props.isClicked
          ? <p> {this.props.text}</p> : "")}
      </section>
    )
  }
}
export default Accordian
