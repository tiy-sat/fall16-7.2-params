import React from 'react'

export default React.createClass({
  render() {
    return (
      <section>
        <h2> Viewing {this.props.params.name} </h2>
        <a href={`https://codepen.io/jason-vanderslice/pen/${this.props.params.codepen}`}>View Projects Codepen</a>
      </section>
    )
  }
})
