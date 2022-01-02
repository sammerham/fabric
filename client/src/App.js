import { React, useState, useEffect } from 'react';
import MediaApi from './api/mediaApi';
import MediaList from './components/MediaList';

import {
  StyledButton,
  StyledMainTitle,
  StyledDivButton
} from './components/StyledComponents'
const KEY = 'localStorageMatrixKey';



/*
 * App
 *
 * This is the page where you rednder App
 * State: data

 * props: none
 * App ---->> MediaList ----> MediaItem
 */

function App() {
  const [data, setData] = useState([]);


  //! *********** Save and get data from local storage **************

  // get data from local storage in first render if any
  useEffect(() => {
    const SavedData = JSON.parse(localStorage.getItem(KEY));
    setData(data => SavedData);
  }, []);

  
  // save in local storage so you won't lose info on refresh
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(data));
  }, [data]);

//! ******************************************************************

// fn to handle click for button one
  const handleClickMatrix = () => {
    async function fetchMatrixData() {
      const MatrixData = await MediaApi.getAllMatrixMedia();
      
      setData(data => MatrixData.Search);
    }
    fetchMatrixData();
  };


// fn to handle click for button two
  const handleClickMatrixRevolutions = () => {
    async function fetchMatrixRevolutionsData() {
      const MatrixRevolutionsData = await MediaApi.getAllMatrixrevolutionsMedia();
      setData(d => MatrixRevolutionsData.Search);
    }
    fetchMatrixRevolutionsData();
  };


// fn to handle click for button three
  const handleClickMatrixReloaded = () => {
    async function fetchMatrixReloadedData() {
      const MatrixReloadedData = await MediaApi.getAllMatrixreloadedMedia();
      setData(dat => MatrixReloadedData.Search);
    }
    fetchMatrixReloadedData();
  };


  return (
    <div>
      <div > 
        <StyledMainTitle bg={'#448565'} className='App-sameh'>Media Information</StyledMainTitle>
        <StyledDivButton>
          <StyledButton bg={'#58755b'} onClick={handleClickMatrix}>Matrix</StyledButton>
          <StyledButton bg={'#58755b'} onClick={handleClickMatrixRevolutions}>Matrix Revolutions</StyledButton>
          <StyledButton bg={'#58755b'} onClick={handleClickMatrixReloaded}>Matrix Reloaded</StyledButton>
        </StyledDivButton>
      </div>
      <MediaList data={data}/>
    </div>
  );
}

export default App;
