import { Resolver, Query, Args } from "@nestjs/graphql";
import { QueryBus } from "@nestjs/cqrs";
import { ReviewDTO } from "../../dto/reviews/get-review.response.dto";
import { GetSingleReviewRequest } from "../../domain/reviews.types";
import { GetReviewQuery } from "./get.review.handler";
import { GetReviewRequestDto } from "../../dto/reviews/get-review.request.dto";

@Resolver()
export class GetReviewResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => ReviewDTO)
  async getReview(
    @Args("params", { type: () => GetReviewRequestDto })
    params: GetReviewRequestDto
  ): Promise<ReviewDTO> {
    const { id } = params;
    const options: GetSingleReviewRequest = { id };
    const query = new GetReviewQuery(options);
    const result = await this.queryBus.execute(query);
    const data: ReviewDTO = result;
    return data;
  }
}
