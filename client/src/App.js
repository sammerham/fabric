import { React, useState, useEffect } from 'react';
import MediaContext from './mediaContext';
import MediaList from './components/MediaList';
import ButtonGroup from './components/ButtonGroup';
const KEY = 'localStorageMatrixKey';


/*
 * App
 *
 * This is the page where you rednder App
 * State: data

 * props: none
 * App ---->> ButtonGroup ----> MediaList ----> MediaItem
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

  return (
      <MediaContext.Provider value={{data, setData}}>
        <ButtonGroup />
        <MediaList />
      </MediaContext.Provider>
  );
}

export default App;
