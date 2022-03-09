import React from 'react'

function NameListThree() {
    const persons = [
        {
            id: 1,
            name: 'Scott',
            age:45,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Adam',
            age:44,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Tuan',
            age:42,
            skill: 'C#'
        },
        {
            id: 4,
            name: 'Uma',
            age:39,
            skill: 'Javascript'
        },
    ]
  return (
    <div>
        {
            persons.map(person => (
                <ul key={person.id}>
                    <li>{person.id}</li>
                    <li>{person.name}</li>
                    <li>{person.age}</li>
                    <li>{person.skill}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default NameListThree