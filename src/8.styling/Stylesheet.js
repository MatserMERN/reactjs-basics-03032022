import React from 'react'
import './Styling.css'

function Stylesheet({primary}) {
    let className = primary ? 'primary' : 'secondary'
  return (
    <div>
        <h1 className="primary enlarge-text">Header would be using CSS style Sheet</h1>
        <br />
        <h1 className={`${className} enlarge-text`}>Apply Orange only if primary is true else apply Blue</h1>
    </div>
  )
}

export default Stylesheet