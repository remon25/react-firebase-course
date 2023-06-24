import React from 'react'

const  Greet = props => {
    const{name,heroName} = props
  return (
    <div>Heloo {name} your hero name is {heroName}</div>
  )
}

export default Greet

