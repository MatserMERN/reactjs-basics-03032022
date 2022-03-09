import React from 'react'

// const  Hello = () => {
//   return (
//     <div>
//         <h1>This is using JSX</h1>
//     </div>
//   )
// }

const  Hello = () => {
    return React.createElement('div', 
                                {id:'divId', className : 'divClass'}, 
           React.createElement('h1', 
                                {id:'h1Id', className : 'h1Class'},  
                                'This is without JSX'))
  }

export default Hello
