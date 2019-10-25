import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies {
      id
      title
      mcover
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetails($movieId: Int!) {
    movie(id: $movieId) {
      id
      mcover
      title
    }
  }
`;

export const ADD_MOVIE = gql`
    mutation addMovieMutation($id: String, $title: String, $mcover: String) {
    addMovie(id: $id, title: $title, mcover: $mcover) 
  }
`