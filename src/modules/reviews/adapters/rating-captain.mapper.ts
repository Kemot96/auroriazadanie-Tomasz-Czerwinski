import { Injectable } from "@nestjs/common";
import {
  ExternalPaginatedType,
  ReviewExternalRecord,
  PaginatedType,
} from "../domain/reviews.types";
import { ReviewEntity } from "../domain/reviews.entity";

@Injectable()
export class RatingCaptainMapper {
  //constructor() {}

  reviewsToDomain(
    reviews: ExternalPaginatedType<ReviewExternalRecord>
  ): PaginatedType<ReviewEntity> {
    //TODO: implement this, map external reviews to domain
    const data = Object.values(reviews.data);
    const mappedData = data.map((review) => {
      const [day, month, year] = review.rate_date.split(".");
      const rate_date = new Date(+year, +month - 1, +day, 12); //TODO make helper function for this
      return new ReviewEntity({
        id: review.id,
        email: review.email,
        name: review.name,
        description: review.description,
        rating: review.rate,
        rate_date: new Date(rate_date),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    const domain: PaginatedType<ReviewEntity> = {
      data: mappedData,
      page: reviews.current_page,
      per_page: reviews.per_page,
      total: reviews.total,
    };

    return domain;
  }

  reviewToDomain(review: ReviewExternalRecord): ReviewEntity {
    return new ReviewEntity({
      id: review.id,
      email: review.email,
      name: review.name,
      description: review.description,
      rating: review.rate,
      rate_date: new Date(review.rate_date),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
