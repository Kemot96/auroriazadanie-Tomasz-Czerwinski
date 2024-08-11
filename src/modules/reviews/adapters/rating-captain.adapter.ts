import { Injectable } from "@nestjs/common";
import {
  PaginatedRequest,
  PaginatedType,
  GetSingleReviewRequest,
} from "../domain/reviews.types";
import { RatingCaptainMapper } from "./rating-captain.mapper";
import { RatingCaptainPort } from "./rating-captain.port";
import { ReviewEntity } from "../domain/reviews.entity";
import * as EXTERNAL_DATA from "./external_reviews_data_example.json";

@Injectable()
export class RatingCaptainAdapter implements RatingCaptainPort {
  constructor(private readonly mapper: RatingCaptainMapper) {}

  async getReviews(
    paginated: PaginatedRequest
  ): Promise<PaginatedType<ReviewEntity>> {
    const { page, per_page } = paginated;
    const offset = per_page * (page - 1);
    const count = await this.count();
    const data = {
      data: EXTERNAL_DATA.slice(offset, offset + per_page),
      current_page: page,
      per_page: per_page,
      total: count,
    }; // TODO: implement this, simulate paginated response from external API
    const reviews = this.mapper.reviewsToDomain(data); //TODO: implement this, map data to domain, use mapper
    return reviews;
  }

  async getReview(request: GetSingleReviewRequest): Promise<ReviewEntity> {
    const { id } = request;
    const data = EXTERNAL_DATA.find((data) => data.id === id);
    const review = this.mapper.reviewToDomain(data);
    return review;
  }

  async count(): Promise<number> {
    const response = EXTERNAL_DATA.length; // TODO: implement this
    return response;
  }
}
