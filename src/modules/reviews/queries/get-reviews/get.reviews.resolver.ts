import { Resolver, Query, Args } from "@nestjs/graphql";
import { QueryBus } from "@nestjs/cqrs";
import { GetReviewsPaginatedResponseDto } from "../../dto/reviews/get-reviews.response.dto";
import { PaginatedRequest } from "../../domain/reviews.types";
import { GetAllReviewsQuery } from "./get.reviews.handler";
import { GetReviewsRequestDto } from "../../dto/reviews/get-reviews.request.dto";

@Resolver()
export class GetReviewsResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query(() => GetReviewsPaginatedResponseDto)
  async getAllReviews(
    @Args("params", { type: () => GetReviewsRequestDto })
    params: GetReviewsRequestDto
  ): Promise<GetReviewsPaginatedResponseDto> {
    const { page, per_page } = params;
    const options: PaginatedRequest = { page, per_page };
    const query = new GetAllReviewsQuery(options);
    const result = await this.queryBus.execute(query);
    const data = new GetReviewsPaginatedResponseDto({
      page: result.page,
      per_page: result.per_page,
      total: result.total,
      data: result.data,
    });
    return data;
  }
}
