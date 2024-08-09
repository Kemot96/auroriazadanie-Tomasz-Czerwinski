import { ArgsType, Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, Max, Min } from "class-validator";

@ArgsType()
@InputType()
export class GetReviewsRequestDto {
  @IsInt()
  @Field(() => Int, { nullable: true, defaultValue: 1 })
  page: number;

  @IsInt()
  @Max(100)
  @Min(1)
  @Field(() => Int, { nullable: true, defaultValue: 10 })
  per_page: number;
}
