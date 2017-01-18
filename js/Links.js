import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      projects: {
        
      }
    }
  },
  render() {
    return (
      <nav>
        {
          Object.keys(this.props.projects).map(
            (projectKey, i)=>{
              // Created a reference to each iteration on the object
              var currentProject = this.props.projects[projectKey];

              // In order to use this JSX component render we *must* return
              //   to get it out of this scope
              return <Link
                to={`project/${currentProject.name}/${currentProject.codepen}`}
                key={i}
                className="link--project">
                View {currentProject.name} Project
              </Link>
            }
          )
        }
      </nav>
    )
  }
})
