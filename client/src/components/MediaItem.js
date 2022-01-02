import React from 'react'

import {
  StyledImage,
  StyledTitle,
  StyledYear,
  StyledType,
  StyledDivMedia
} from './StyledComponents';

const DEFAULT_POSTER = 'https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx';


/*
 * Media Item
 *
 * This is the page where you rednder all info about single item
 * State: None

 * props:
      *Item { "id": 1, "title": "The Matrix", "imdbid": "tt0133093", "media_type": "movie", "release_year": 1999}
  
 * App ---->> MediaList ----> MediaItem
 */

function MediaItem({ item }) {
  const { Title, Year, Poster, Type } = item;

  return (
    <StyledDivMedia>
      <StyledImage src={Poster !== "N/A" ? Poster:DEFAULT_POSTER} alt="media" />
      <StyledTitle bg={'#448565'}>{ Title}</StyledTitle>
      <StyledYear bg={'#58755b'}>Release Year: { Year}</ StyledYear>
      <StyledType bg={'#58755b'}>Media Type: { Type }</StyledType>
    </StyledDivMedia>
   
  )
}

export default MediaItem
