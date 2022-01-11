import { React, useContext } from 'react'
import {
  StyledButton,
  StyledDivButton,
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
  
 * App ---->> Header --->> GroupButton
 */


function ButtonGroup() {
  const { setData } = useContext(MediaContext);
  // const { getAllMatrixMedia, getAllMatrixrevolutionsMedia, getAllMatrixreloadedMedia } = MediaApi;
  const { getMedia } = MediaApi;
  


// fn handle click to get the media data
  async function fetchMediaData(str) {
    const MediaData = await getMedia(str);
    setData(data => MediaData.Search);
  }

  return (
    <div>
      <StyledDivButton>
        <StyledButton bg={'#58755b'} onClick={() => fetchMediaData('matrix')}>Matrix</StyledButton>
        <StyledButton bg={'#58755b'} onClick={() => fetchMediaData('matrix revolutions')}>Matrix Revolutions</StyledButton>
        <StyledButton bg={'#58755b'} onClick={() => fetchMediaData('matrix reloaded')}>Matrix Reloaded</StyledButton> 
      </StyledDivButton>
    </div>
  )
}

export default ButtonGroup
