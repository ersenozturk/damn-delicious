import React from 'react'
// import {Container, Logo,LogoSpan1,LogoSpan2,LogoSpan3} from './Navbar.styled'
import {Container, Logo} from './Navbar.styled'

const Navbar = () => {
  return (
    <Container>
      <Logo>
        {/* <LogoSpan1>Elegant</LogoSpan1>
        <LogoSpan2>|</LogoSpan2>
        <LogoSpan3>DISHES</LogoSpan3> */}
      </Logo>
      <ul>
        <li>About</li>
        <li>Github</li>
        <li>Logout</li>3      </ul>
    </Container>
  )
}

export default Navbar