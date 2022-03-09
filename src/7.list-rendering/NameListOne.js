import React from 'react'

function NameListOne() {
    const names = ["Scott", "Adam", "Tuan"]

  return (
    <div className="container">
        {
            names.map((name, index) => <h2 key={index}>{name}</h2>)
        }
    </div>
  )
}

export default NameListOne