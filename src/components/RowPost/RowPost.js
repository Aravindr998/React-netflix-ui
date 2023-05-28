import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'
import './RowPost.css'
import PlayButton from '../UI/PlayButton'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  useEffect(() => {
    axios.get(props.url)
    .then(response => {
      setMovies(response.data.results)
    })
  }, [])
  const movieHandler = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      if(response.data.results.length!=0){
        console.log(response.data.results[0])
        setUrlId(response.data.results[0].key)
      }
    })
    .catch(error => {
      console.log(id)
      console.log(error)
    })
  }
  const cancelHandler = () => {
    setUrlId('')
  }
  const movieList = movies.map(obj => (
    <div className='img-parent' onClick={() => movieHandler(obj?.id)}>
      <div className="backdrop"></div>
      <PlayButton className='play-button-ui' />
      <img key={obj?.id} className={props.isSmall?'small-poster':'poster'} src={imageUrl+obj?.backdrop_path} alt="" />
    </div>
  ))
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movieList}
      </div>
      <div className='youtube-parent'>
        {urlId && <button onClick={cancelHandler} className='cancel-button'><img className='cancel' src="/cancel.png" alt="" /></button>}
      </div>
      {urlId && <Youtube videoId={urlId} opts={opts}/>}
    </div>
  )
}

export default RowPost