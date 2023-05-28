import React, { useEffect, useState } from "react"
import { API_KEY, imageUrl } from "../../constants/constants"
import axios from "../../axios"
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      setMovie(response.data.results[5])
    })
  }, [])
  
  return (
    <div className="banner" style={{backgroundImage: `url(${imageUrl+movie?.backdrop_path})`}}>
      <div className="content">
        <h1 className="title">{movie?.title}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">
          {movie?.overview}
        </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
