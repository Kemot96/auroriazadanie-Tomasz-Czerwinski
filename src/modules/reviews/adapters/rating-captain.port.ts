import { PaginatedRequest, PaginatedType } from "../domain/reviews.types";
import { ReviewEntity } from "../domain/reviews.entity";

export interface RatingCaptainPort {
  getReviews(paginated: PaginatedRequest): Promise<PaginatedType<ReviewEntity>>;
  count(): Promise<number>;
}
