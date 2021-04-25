import React from "react";
import styled from 'styled-components'

const Header = styled.header`
  font-size: 20px;
  color: red;
  background-color: #20232a;
  height: 50px;
  max-width: 100%;
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  @media (min-width: 0px) and (max-width: 599px) {
    height: 40px;
  }
`

const SiteName = styled.a`
  color: #61dafb;
  font-weight: 300;
`

const Link = styled.a`
    font-size: 12px;
`

export function NavBar() {
  return (
      <Header>
	<SiteName href="/">
	 Blog do Daniel
	</SiteName>
	  <Link href="https://www.linkedin.com/in/daniel-fernandes-pereira/" > Linkdin </Link>
      </Header>
  ) 
}

