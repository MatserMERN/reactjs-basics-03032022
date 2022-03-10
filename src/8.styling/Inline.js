import React from 'react'

const heading = {color: 'blue', fontSize: '72px'}

function Inline() {
  return (
    <div>
        <h1 style={heading}>Inline Styling</h1>
        <br />
        <h1 style={{color: 'crimson', fontSize: '72px' }}> Inline Styling Again</h1>
    </div>
  )
}

export default Inline