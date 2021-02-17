import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const MoviePage = ({ match }) => {
  const id = match.params.id
  const [movie, updateMovie] = useState({})
  const [reccomended, updateReccomended] = useState([])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.apikey}&language=en-US`)
      .then(({ data }) => {
        updateMovie(data)
      })


    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.apikey}&language=en-US&page=1`)
      .then(({ data }) => {
        updateReccomended(data.results)

      })
  }, [id])

  //console.log(reccomended)

  return <section className="container">
    <div className="tile is-ancestor">

      <div className="tile is-child box">
        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} height="300px" />
      </div>
      <div className="tile is-child box">
        <p className="title">{movie.title}</p>
        <p className="text">{movie.overview}</p>
        <p>{movie.vote_average}/10</p>
        <p>Released: {movie.release_date}</p>
      </div>

      <div className="tile is-parent">
        <div className="tile is-child box">
          <div className="columns is-multiline">
            {reccomended.map((item) => {
              return <div key={item.id}>
                <Link to={{
                  pathname: `/project-2/MoviePage/${item.id}`,
                  state: {
                    name: item.name
                  }
                }}>
                  <div className="columns is-gapless is-multiline is-mobile">
                    <div className="column">
                      <img className="card-image" src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt={item.title} width="80px" />
                    </div>
                  </div>
                </Link>
              </div>
            })}
          </div>
        </div>

      </div>

    </div>


  </section >


}
export default MoviePage

