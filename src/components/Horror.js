import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const Horror = () => {
  const [movies, updateMovies] = useState([])
  const [pages, updatePages] = useState([])


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`)

      .then(data => {
        const filterPoster = data.data.results.filter(poster => {
          return poster.poster_path !== null

        })
        updateMovies(filterPoster)
        updatePages(data.data)

      })
  }, [])

  function newPage(pageno) {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageno}&with_genres=27`)
      .then(data => {
        const filterPoster = data.data.results.filter(poster => {
          return poster.poster_path !== null
        })
        updateMovies(filterPoster)
      })
  }

  function handleClick(data) {
    newPage(data.selected)
  }

  return <section className="page-container">
    <div className="page-nation">
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={''}
        pageCount={pages.total_pages}
        pageClassName={'pageclasses'}
        marginPagesDisplayed={0}
        pageRangeDisplayed={9}
        initialPage={1}
        onPageChange={handleClick}
        containerClassName={'pagination'}
      />
    </div>

    <div className="container">
      {movies.map((movie) => {
        return <div key={movie.id}>
          <Link key={movie.id} to={{
            pathname: `/project-2/MoviePage/${movie.id}`,
            state: {
              name: movie.name
            }
          }}>
            <div className="column">
              <div className="card-image">
                <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} width="300px" />
              </div>
            </div>
            <div className="row-wrap">
            </div>
          </Link>
        </div>
      })}
    </div>
  </section>
}
export default Horror