import { GraphQLError } from "graphql";

export const reviewsRequestError = (message: string): GraphQLError => {
  return new GraphQLError("Error on reviews request", {
    extensions: {
      code: "REVIEWS_REQUEST_ERROR",
      message,
    },
  });
};
