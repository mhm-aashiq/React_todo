import React from 'react'

const Header = (props) => {
  return (
    <header><h1>{props.title} To Do List </h1></header>
  )
}
Header.defaultProps = {
  title: "Hi! Welcome"
}

export default Header