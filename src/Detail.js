import React from "react";
import { Query } from "react-apollo"
import { MOVIE_DETAILS } from "./queries";

const Detail = ({
    match: {
      params: { movieId }
    }
  }) => (
    <Query query={MOVIE_DETAILS} variables={{ movieId: Number(movieId) }}>
      {({ loading, error, data }) => {
        console.log(movieId)
        console.log(typeof(movieId))
        if (loading) return "loading";
        if (error) return "error";
        return (
          <React.Fragment>
            {data.movie.title}
            {data.movie.mcover}
            {/* {data.movie.rating} */}
          </React.Fragment>
        );
      }}
    </Query>
  );

export default Detail;