import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  const data = [
    { item: "Home", url: "/" },
    { item: "Html", url: "/html" },
    { item: "Css", url: "/css" },
    { item: "Javascript", url: "/js" },
    { item: "React", url: "/re" },
  ]

  return (
    <nav className="nav">
      {data.map((a) => (
        <NavLink key={a.url} to={a.url} className="nav-link">
          {a.item}
        </NavLink>
      ))}
    </nav>
  )
}

export default Nav
