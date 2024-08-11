import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetSingleReviewRequest } from "../../domain/reviews.types";
import { ReviewEntity } from "../../domain/reviews.entity";
import { RatingCaptainAdapter } from "../../adapters/rating-captain.adapter";

export class GetReviewQuery {
  readonly id: number;

  constructor(options: GetSingleReviewRequest) {
    Object.assign(this, options);
  }
}

@QueryHandler(GetReviewQuery)
export class GetReview implements IQueryHandler {
  constructor(private readonly adapter: RatingCaptainAdapter) {}

  async execute(query: GetReviewQuery): Promise<ReviewEntity> {
    const { id } = query;
    const review = await this.adapter.getReview({ id });
    const reviewEntity: ReviewEntity = review;
    return reviewEntity;
  }
}
