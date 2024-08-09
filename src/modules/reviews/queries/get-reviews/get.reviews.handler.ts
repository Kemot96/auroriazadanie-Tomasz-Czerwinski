import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PaginatedRequest, PaginatedType } from "../../domain/reviews.types";
import { ReviewEntity } from "../../domain/reviews.entity";
import { RatingCaptainAdapter } from "../../adapters/rating-captain.adapter";

export class GetAllReviewsQuery {
  readonly page: number;
  readonly per_page: number;
  readonly description: boolean;
  readonly rating: number;

  constructor(options: PaginatedRequest) {
    Object.assign(this, options);
  }
}

@QueryHandler(GetAllReviewsQuery)
export class GetAllReviews implements IQueryHandler {
  constructor(private readonly adapter: RatingCaptainAdapter) {}

  async execute(
    query: GetAllReviewsQuery
  ): Promise<PaginatedType<ReviewEntity>> {
    const { page, per_page } = query;
    const reviews = await this.adapter.getReviews({ page, per_page });
    const reviewsPaginated: PaginatedType<ReviewEntity> = reviews;
    return reviewsPaginated;
  }
}
