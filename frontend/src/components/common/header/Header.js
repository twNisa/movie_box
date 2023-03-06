import React from "react";
import {RiMovie2Fill} from "react-icons/ri"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiSearch} from "react-icons/fi"
import styled from "styled-components"

const HeaderContainer = styled.header`

`

export default function Header(){
  return (
    <HeaderContainer>
      <div className="header-logo">
        <RiMovie2Fill />
        MovieBox
      </div>
      <div className="header-search">
        <input type="text" className="search-input" name="search" />
        <button><FiSearch /></button>
      </div>
      <div className="header-login">
        <button>Sign In</button>
        <button><GiHamburgerMenu /></button>
      </div>
    </HeaderContainer>
  )
}