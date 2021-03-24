# README


### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, SEI 


## RexFlix | 48 Hour Hackathon 🍿 🦖 📺

## Overview

This was my third project at General Assembly SEI course, London. We were asked to build a React Web Application that consumes a public API. 

Oh, and we had to do this in 48 hours!

You can view our App on GitHub pages [here](https://jesskaria.github.io/project-2/), or find the GitHub repo [here](https://github.com/JessKaria/project-2).

## Introducing RexFlix!

![here](https://github.com/JessKaria/project-2/blob/main/src/images/ezgif.com-gif-maker.gif?raw=true)

## Brief...

* **Consume a public API** 
* **Have several components**
* **The app should include a router** - with several "pages".
* Have **semantically clean HTML** 
* **Be deployed online** and accessible to the public.
* Be a **working application**, hosted somewhere on the internet

## Technologies used !

- React
- React Router
- React Hooks
- JSX
- JavaScript (ES6)
- SASS
- Bulma
- Git and GitHub
- Canva
- Google Fonts
- Insomnia
- Babel
- Axios

## Required Features

- Tiled homepage
- Movie Bio page to detail title, description rating and imagery
- Bio page to provide reccomendations
- Discover movies by genre
- Navigate to dedicated genres via react router
- Draw slider menu
- Pagination
- Mobile responsive

## Wireframes

We knew early on that we wanted to make a Netflix clone, so this helped us both with visualizing the layout and kept us focus on delivering DRY code.


## Approach

Once we had picked our API, we mapped out the user journey and then began building out the functionality. This was my first time pair programming and it was incredibly rewarding, we were able to jump in and solve each others issues but also provide a sounding board to each other when discussing ideas. We were focussed on getting out MVP build and ready by the end of day one so we could build add styling and iron out any bugs before submitting the final project.

We knew we wanted users to be able to click through on images to a detail page, revealing more information on the movie, including more reccomendations. We did this by mapping over over the results and using the ID's provided to us from the API to create a link and pass state to the seperate detail page. 

In addition, the way the API was structured meant the image property did not contain the full URL so we had to concatonate the URL to the path provided in the request.

Rendering data from API 🎥

```
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
```
The UI of our App is really focused on the large tiled imagery, so we made a conscious decision to filter those without images before they rendered.

Filtering results without imagery 🍿

```
 
  function newPage(pageno) {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageno}&with_genres=28`)
      .then(data => {
        const filterPoster = data.data.results.filter(poster => {
          return poster.poster_path !== null
        })
        updateMovies(filterPoster)
      })
  }
  
```

On our movie detail page, we had to fetch the data related to the specific movie clicked from the homepage, we did this by getting the Id from the params we passed in the URL. we then had two seperate requests using the ID to render the movie title, rating, imagery and bio and the other would fetch reccomended movies based on that particular movie.

```
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
```

## My role and challenges

After we were both happy with the homepage and movie reccomendations, we split up and started working on different components, I was tasked with building the navigation and fixing some layout issues on the homepage.

## Wins !

For me, building a really great navigation menu was critical, allowing users to browse by genre. I couldn't do this through Bulma's CSS framework so i decided to build my own navigation that rendered conditionally.

Custom navigation 🧭

```
const Nav = () => {
  const [menu, showMenu] = useState(false)

  let nav

  if (menu) {
    nav = <div className="dropdown">
      <ul className="menu-list">
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/' }}>Home</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Horror' }}>Horror</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Comedy' }}>Comedy</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Family' }}>Family</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Thriller' }}>Thriller</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/SciFi' }}>Scifi</Link></li>
        <li className="mob-menu"><Link className="navitem" to={{ pathname: '/project-2/Action' }}>Action</Link></li>
        <li className="mob-menu"><Link className="navitem" onClick={() => showMenu(!menu)}>Close</Link></li>
      </ul>
    </div>
  }

  return <>
    <div className="navbar">
      <Link className="rexHeader" to={{ pathname: '/project-2/' }}>REXFLIX</Link>
      {nav}
      <a role="button" className="navbar-burger" onClick={() => showMenu(!menu)}>
        <img src={DINOMENU} className="dinosmall" height="70px"></img>
      </a>
      <div className="navbar-menu">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">

          <div className="navbar-item">
            <img className="burger" src={DINOMENU} onClick={() => showMenu(!menu)} />
          </div>

        </div>
      </div>
    </div>
  </>
}
export default Nav

```

![here](https://github.com/JessKaria/project-2/blob/main/Untitled%20design%20(2).png?raw=true)


## Bugs !

Currently some movies don't have reccomendations we should have filtered them too, the first two numbers on pagination are also not working and we are hoping to fix.

## Potential future features

- Repilcate the site for TV shows
- Add a search function
- Integrate a reviews part from another API

## What I learned...

This was my second time building something with React and my first in a paired programming situation and I loved it. I learned how to manipulate react router, delvier a multi-page app, how to quickly style UI's with Bulma and how to build a custom conditional navigation bar that was completely mobile responsive.
