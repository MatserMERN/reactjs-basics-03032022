import React from 'react'

function NameListTwo() {
    const names = ["Scott", "Adam", "Tuan"]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (

            // <React.Fragment>
            //     <h2>Here is your namelist</h2>
            //     <div className="container">{nameList}</div>
            // </React.Fragment>
        <>
            <h2>Here is your namelist</h2>
            <div className="container">{nameList}</div>
        </>

    )
}

export default NameListTwo