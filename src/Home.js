import React from "react";
import { Query } from "react-apollo"
import { HOME_PAGE } from "./queries"
import Movie from './Movie'

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
    <Container>
    <Query query={HOME_PAGE}>
      {({ loading, data, error }) => {
        if (loading) return "loading";
        if (error) return "something happened";
        return data.movies.map(movie => (
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.mcover}
            title={movie.title}
            // rating={movie.rating}
          />
        ));
      }}
    </Query>
  </Container>
  );

export default Home;