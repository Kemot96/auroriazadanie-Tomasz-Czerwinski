import { Field, ObjectType } from "@nestjs/graphql";
import { CreatePaginatedResponseDTO } from "../paginated.response.dto";
import { ReviewDTO } from "./get-review.response.dto";

@ObjectType()
export class GetReviewsPaginatedResponseDto extends CreatePaginatedResponseDTO(
  ReviewDTO
) {
  @Field(() => [ReviewDTO])
  data: ReviewDTO[];
}
