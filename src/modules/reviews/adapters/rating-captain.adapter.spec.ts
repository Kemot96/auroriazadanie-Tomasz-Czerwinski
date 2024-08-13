import { Test } from "@nestjs/testing";
import { RatingCaptainAdapter } from "./rating-captain.adapter";
import { RatingCaptainMapper } from "./rating-captain.mapper";
import {
  ReviewExternalRecord,
  PaginatedRequest,
  ExternalPaginatedType,
} from "../domain/reviews.types";
import * as EXTERNAL_DATA from "./external_reviews_data_example.json";

describe("RatingCaptainAdapter", () => {
  let ratingCaptainAdapter: RatingCaptainAdapter;
  let ratingCaptainMapper: RatingCaptainMapper;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [RatingCaptainAdapter, RatingCaptainMapper],
    }).compile();

    jest.useFakeTimers();
    jest.setSystemTime(new Date("2024-08-13T13:44:45.000Z"));

    ratingCaptainAdapter =
      moduleRef.get<RatingCaptainAdapter>(RatingCaptainAdapter);
    ratingCaptainMapper =
      moduleRef.get<RatingCaptainMapper>(RatingCaptainMapper);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe("getReviews", () => {
    it("should return paginated reviews", async () => {
      const paginated: PaginatedRequest = { page: 0, per_page: 3 };
      const { page, per_page } = paginated;
      const offset = per_page * (page - 1);
      const mockedReviews: ReviewExternalRecord[] = EXTERNAL_DATA;
      const mockedPaginatedReviews: ExternalPaginatedType<ReviewExternalRecord> =
        {
          data: mockedReviews.slice(offset, offset + per_page),
          current_page: page,
          per_page: per_page,
          total: mockedReviews.length,
        };
      const expectedResult = ratingCaptainMapper.reviewsToDomain(
        mockedPaginatedReviews
      );
      const result = await ratingCaptainAdapter.getReviews(paginated);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("getReview", () => {
    it("should return review", async () => {
      const mockedReviews: ReviewExternalRecord[] = EXTERNAL_DATA;
      const id = 2;
      const review: ReviewExternalRecord = mockedReviews.find(
        (data) => data.id === id
      );
      const expectedResult = ratingCaptainMapper.reviewToDomain(review);

      const result = await ratingCaptainAdapter.getReview({ id });

      expect(result).toEqual(expectedResult);
    });

    it("should return other review", async () => {
      const mockedReviews: ReviewExternalRecord[] = EXTERNAL_DATA;
      const mockedReviewID = 2;
      const resultReviewID = 3;
      const review: ReviewExternalRecord = mockedReviews.find(
        (data) => data.id === mockedReviewID
      );
      const expectedResult = ratingCaptainMapper.reviewToDomain(review);

      const result = await ratingCaptainAdapter.getReview({
        id: resultReviewID,
      });

      expect(result).not.toEqual(expectedResult);
    });
  });

  describe("count", () => {
    it("should return total amount of reviews", async () => {
      const mockedReviews: ReviewExternalRecord[] = EXTERNAL_DATA;
      const expectedResult = mockedReviews.length;

      const result = await ratingCaptainAdapter.count();

      expect(result).toEqual(expectedResult);
    });
  });
});
