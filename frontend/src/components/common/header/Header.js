import React from "react";
import {RiMovie2Fill} from "react-icons/ri"
import {GiHamburgerMenu} from "react-icons/gi"
import {FiSearch} from "react-icons/fi"
import styled from "styled-components"

const HeaderContainer = styled.header`
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`
const HeaderContent = styled.section` 
  max-width: 1100px;
  width: 100%;
  display: flex;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;

  .header-logo{
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    svg{
      color: #dc2626;
      
    }
  }
`
export default function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
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
      </HeaderContent>
      
    </HeaderContainer>
  )
}