import React from 'react'
import MediaItem from './MediaItem'



/*
 * MediaList
 *
 *  This is the page where you rednder a list of all media items 
 * State: None

 * props:
      *data [{ "id": 1, "title": "The Matrix", "imdbid": "tt0133093", "media_type": "movie", "release_year": 1999}, ...]
  
 * App ---->> MediaList
 */

function MediaList({data}) {
  return (
    <div>
      {data?.map(d => < MediaItem item={d} key={d.imdbID}/>)}
    </div>
  )
}

export default MediaList
