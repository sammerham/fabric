import { React, useState, useContext } from 'react'

import MediaContext from '../mediaContext';
import {
  StyledSearchInput,
  StyledSearchForm,
  StyledSearchButton
} from './StyledComponents'
import MediaApi from '../api/mediaApi';

/*
 * SearchBar
 *
 *  This is the page where you rednder search bar and submit button.
 * State: None

 * props:
      None
  
 * App ---->> GroupButton ---->> SearchBar
 */

function SearchBar() {
  const [formData, setFormData] = useState('');
  
  const { setData } = useContext(MediaContext);
  
  const { getMedia } = MediaApi;
  

  // handleChange with form Data
  const handleChange = e => {
    const { value } = e.target;
    setFormData(data => value)
  };



  //fn fetch new media data 
  async function fetchMatrixData(formData) {
    const MatrixData = await getMedia(formData);
      setData(data => MatrixData.Search);
  };

  
  // handleSubmit when form Submits
  const handleSubmit = e => {
    e.preventDefault();
    if (formData)
      fetchMatrixData(formData)
    setFormData("");
  };


  return (
    <div>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledSearchInput
          type="text"
          name="term"
          id="term"
          placeholder="Enter a search Term"
          value={formData}
          onChange={handleChange}
        />
        <StyledSearchButton bg={'#58755b'} onClick={handleSubmit}>Search</StyledSearchButton>
      </StyledSearchForm>
    </div>
  )
}

export default SearchBar
