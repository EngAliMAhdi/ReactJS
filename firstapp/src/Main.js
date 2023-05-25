import React from 'react'

function Main(props) {
    let name="React Js"
    return(
      <section>
        {props.title} Page
        <br/>
        {name}
      </section>
    )
  }

  export default Main;