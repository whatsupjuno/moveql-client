import React from "react";
import { Query } from "react-apollo"
import { MOVIE_DETAILS } from "./queries";

const Detail = ({
    match: {
      params: { movieId }
    }
  }) => (
    <Query query={MOVIE_DETAILS} variables={{ movieId }}>
      {({ loading, error, data }) => {
        if (loading) return "loading";
        if (error) return "error";
        return (
          <React.Fragment>
            {data.movie.title}
            {data.movie.medium_cover_image}
            {data.movie.rating}
          </React.Fragment>
        );
      }}
    </Query>
  );

export default Detail;