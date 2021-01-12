import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import NotFoundView from './pages/NotFoundView/NotFoundView';
import MoviesView from './pages/MoviesView/MoviesView';
import HomeView from './pages/HomeView/HomeView';
import MovieDetailsView from './pages/MovieDetailsView/MovieDetailsView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <MoviesView />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
