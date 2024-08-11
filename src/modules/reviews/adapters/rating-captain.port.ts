import {
  PaginatedRequest,
  PaginatedType,
  GetSingleReviewRequest,
} from "../domain/reviews.types";
import { ReviewEntity } from "../domain/reviews.entity";

export interface RatingCaptainPort {
  getReviews(paginated: PaginatedRequest): Promise<PaginatedType<ReviewEntity>>;
  getReview(request: GetSingleReviewRequest): Promise<ReviewEntity>;
  count(): Promise<number>;
}
