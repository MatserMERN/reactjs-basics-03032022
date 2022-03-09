import React from 'react'

const Greeting = (props) => {
    console.log(props)
    const {id, name, display, skill, isAdmin, children} = props

  return (
    <div className="container">
        <h2>Id: {id}</h2>
        <h2>FirstName: {name}</h2>
        <h2>LastName: {display}</h2>
        <h2>Skill : {skill}</h2>
        <h2>IsAdmin: {isAdmin ? "True": "False"}</h2>
        {children}
        <br />
    </div>
  )
}

export default Greeting