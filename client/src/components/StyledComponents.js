import styled from 'styled-components';


// Create a StyledTitle component that'll render an <h3> tag with some styles
export const StyledTitle = styled.h3`
  color: ${props => props.bg};
  font-size: 1.9vw;
  position:absolute;
  left:280px;
  margin-top:90px;
`;
// Create a StyledTitle component that'll render an <h3> tag with some styles
export const StyledYear = styled.h6`
  color: ${props => props.bg};
  font-size: 1.1vw;
  position:absolute;
  left:280px;
  margin-top:140px;
`;
// Create a StyledTitle component that'll render an <h3> tag with some styles
export const StyledType = styled.h6`
  color: ${props => props.bg};
  font-size: 1.1vw;
  margin-bottom: 10px;
  text-transform: capitalize;
  position:absolute;
  left:280px;
  margin-top:175px;
`;


// Create a StyledImage component that'll render an <img> tag with some styles
export const StyledImage = styled.img`
  width:150px;
  height:150px;
  border-radius:50%;
  border-width:20px;
  border-color:black;
  border:1px solid gray;
  background-color: white;
  margin-top:60px;
`;

// Create a StyledInfoDiv component that'll render an <div> tag with some styles
export const StyledInfoDiv = styled.div`
  margin-top: 95px;
  line-height:1.9;
  position:relative;
  left:130px;
  display:inline-block;
`;


// Create a StyledDivStudent component that'll render an <div> tag with some styles//
export const StyledDivMedia = styled.div`
  display: flex;
  margin-left: 70px;
`;
// Create a StyledDivStudent component that'll render an <div> tag with some styles
export const StyledDivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// Create a Title component that'll render an <h1> tag with some styles
export const StyledMainTitle = styled.h1`
  color: ${props => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Create a button component that'll render an <button> tag with some styles

export const StyledButton = styled.button`
  /* Adapt the colors based on bg prop */
  background-color: ${props => props.bg};
  border: 2px solid ${props => props.bg};
  border-radius: 0.50rem;
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  padding: 0.5rem;
  &:hover {
    background-color: white;
    color: ${props => props.bg};
  }
`;

// Create a StyledTagInput component that'll render an <input> tag with some styles
export const StyledSearchInput = styled.input`
 margin-top: 30px;
  // width:20%;
  text-align:center;
  height:25px;
  padding:2px 23px 2px 30px;
  font-size:18px;
  border-radius: 0.50rem;
  border-color: lightgray;
`;
// Create a button component that'll render an <button> tag with some styles

export const StyledSearchButton = styled.button`
  /* Adapt the colors based on bg prop */
  background-color: ${props => props.bg};
  border: 2px solid ${props => props.bg};
  border-radius: 0.50rem;
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  padding: 0.5rem;
  &:hover {
    background-color: white;
    color: ${props => props.bg};
  }
    margin-top:30px;
`;

// Create a Form component that'll render an <form> tag with some styles
export const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;