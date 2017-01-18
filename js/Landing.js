import React from 'react'
import { Link } from 'react-router'
import Links from './Links'

export default React.createClass({
  getInitialState(){
    return {
      projects: {
        0: {
          name: "calc",
          codepen: "NdbOwY"
        },
        1: {
          name: "group",
          codepen: "NdbOwY"
        },
        2: {
          name: "gift-buying-app",
          codepen: "NdbOwY"
        }
      }
    }
  },
  render() {
    return (
      <section>
        <h2> Welcome to my portfolio landing </h2>
        <Links projects={ this.state.projects } />
      </section>
    )
  }
})
