import React from 'react';
import ButtonGroup from './ButtonGroup';
import { StyledMainTitle } from './StyledComponents';
import SearchBar from './SearchBar';



/*
 * Header
 *
 *  This is the page where you rednder Tile, Matix Btns, and search bar .
 * State: None

 * props:
      None
  
 * App ---->> Header 
 */

function Header() {
  return (
    <div>
      <StyledMainTitle bg={'#448565'} className='App-sameh'>Media Information</StyledMainTitle>
      <ButtonGroup />
      <SearchBar />
    </div>
  )
}

export default Header
