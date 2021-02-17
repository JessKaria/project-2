# README


### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, SEI 


## RexFlix | 48 Hour Hackathon

## Overview

This was my third project at General Assembly SEI course, London. We were asked to build a React Web Application that consumes a public API. 

Oh, and we had to do this in 48 hours!

You can view our App on GitHub pages [here](https://jesskaria.github.io/project-2/), or find the GitHub repo [here](https://github.com/JessKaria/project-2).

## Introducing RexFlix!

![here](https://github.com/JessKaria/project-2/blob/main/p2.gif?raw=true)

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
- JSX
- JavaScript (ES6)
- HTML
- SASSS
- Bulma
- Git and GitHub
- Canva
- Google Fonts
- Insomnia
- Babel
- Axios

## Wireframes

For us, having an application that ran quickly and was able to offer endless reccomendations to users was critical. We spent a while looking at API's but ended up choosing The Movie Database due to the several endpoints, including the reccomendations and genres. 

![here](https://github.com/JessKaria/project-2/blob/main/WhatsApp%20Image%202021-02-06%20at%2013.43.30.jpeg?raw=true)


## Approach

Once we had picked our API, we mapped out the user journey and then began building out the functionality. This was my first time pair programming and it was incredibly rewarding, we were able to jump in and solve each others issues but also provide a sounding board to each other when discussing ideas. 

We were focussed on getting out MVP build and ready by the end of day one so we could build add styling and iron out any bugs before submitting.


## Features

- Tiled homepage
- Movie Bio page to detail title, description rating and imagery
- Bio page to provide reccomendations
- Discover movies by genre
- Navigate to dedicated genres via react router
- Draw slider menu
- Pagination
- Mobile responsive

## Challenges

For me, the biggest challenge was trying to remain focussed on having a working finished product, rather than adding more unnecessary features.

We were extremely conscious of the time, I think this helped us build a really great reccomendations tool.

## Wins !

![ultimate-tic-tac-toe](https://github.com/JessKaria/project-2/blob/main/Untitled%20design%20(1).png?raw=true)

The UI of our App is really focused on the large tiled imagery, so we filtered out results that didn't have images.

```
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`)

      .then(data => {
        updateMovies(data.data.results)
        updatePages(data.data)
      })
  }, [])

 
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

## Bugs !

Currently some movies don't have reccomendations we should have filtered them too, the first two numbers on pagination are also not working and we are hoping to fix.

## Potential future features

- Repilcate the site for TV shows
- Add a search function
- Integrate a reviews part from another API

## What I learned...

This was my second time building something with React and my first in a paired programming situation and I loved it. 

I learned how to manipulate react router, delviering a multi-page app, how to quickly style UI's with Bulma and how to build a custom conditional navigation bar that was completely mobile responsive.









