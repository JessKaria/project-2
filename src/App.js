import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import MoviePage from './components/MoviePage.js'
import Horror from './components/Horror.js'
import Animation from './components/Animation.js'
import Comedy from './components/Comedy.js'
import Drama from './components/Drama.js'
import Family from './components/Family.js'
import Thriller from './components/Thriller.js'
import science from './components/SciFi.js'
import Action from './components/Action.js'
import 'bulma'
import './styles/style.scss'






const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/project-2" component={Home} />
      <Route path="/project-2/MoviePage/:id" component={MoviePage} />
      <Route exact path="/project-2/Horror" component={Horror} />
      <Route exact path="/project-2/Comedy" component={Comedy} />
      <Route exact path="/project-2/Animation" component={Animation} />
      <Route exact path="/project-2/Drama" component={Drama} />
      <Route exact path="/project-2/Family" component={Family} />
      <Route exact path="/project-2/Thriller" component={Thriller} />
      <Route exact path="/project-2/SciFi" component={science} />
      <Route exact path="/project-2/Action" component={Action} />
    </Switch>
    <footer>Created by <a href="https://www.linkedin.com/in/jess-karia-4104351bb/">Jess Karia</a> and <a href="https://www.linkedin.com/in/lydiaawood/">Lydia Wood </a>2021</footer>
  </BrowserRouter>
)



export default App