import React from 'react'

function GreetingOne({name, skill}) {
  return (
    <div className="container">
        <h1>{name} is a {skill}</h1>
    </div>
  )
}

export default GreetingOne