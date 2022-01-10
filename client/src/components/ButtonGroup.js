import { React, useContext } from 'react'
import {
  StyledButton,
  StyledDivButton,
  StyledMainTitle
} from './StyledComponents'
import MediaContext from '../mediaContext'
import MediaApi from '../api/mediaApi';




/*
 * ButtonGroup
 *
 *  This is the page where you rednder mainTitle and main media buttons.
 * State: None

 * props:
      None
  
 * App ---->> GroupButton
 */



function ButtonGroup() {
  const { setData } = useContext(MediaContext);
  const { getAllMatrixMedia, getAllMatrixrevolutionsMedia, getAllMatrixreloadedMedia } = MediaApi;
  


// fn handle click to get the media data
  
  const handleClick = (fn) => {
    async function fetchMatrixData() {
      const MatrixData = await fn();
      setData(data => MatrixData.Search);
    }
    fetchMatrixData();
  };



  return (
    <div>
    <StyledMainTitle bg={'#448565'} className='App-sameh'>Media Information</StyledMainTitle>
    <StyledDivButton>
        <StyledButton bg={'#58755b'} onClick={()=> handleClick(getAllMatrixMedia)}>Matrix</StyledButton>
        <StyledButton bg={'#58755b'} onClick={() => handleClick(getAllMatrixrevolutionsMedia)}>Matrix Revolutions</StyledButton>
        <StyledButton bg={'#58755b'} onClick={() => handleClick(getAllMatrixreloadedMedia)}>Matrix Reloaded</StyledButton> 
      </StyledDivButton>
    </div>
  )
}

export default ButtonGroup
