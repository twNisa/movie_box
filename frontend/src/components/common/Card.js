import styled from "styled-components";




const Card = styled.section`
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  align-items: flex-start;
  
  p.minor{
    font-size: 0.8rem;
    font-weight: bold;
    color: gray;
  }
  h4{
    font-weight: bold;
    font-size: 1.2rem;
  }
  p.director:hover{
    opacity: 0.5;
  }
  img{
    object-fit: center;
    width: 250px;
    height: 370px;
  }
  
`


export default Card