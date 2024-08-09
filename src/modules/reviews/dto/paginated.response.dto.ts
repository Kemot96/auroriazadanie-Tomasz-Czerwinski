import { Field, ObjectType, Int } from "@nestjs/graphql";
import { Type } from "@nestjs/common";
import { PaginatedType } from "../domain/reviews.types";

export function CreatePaginatedResponseDTO<T>(
  classRef: Type<T>
): Type<PaginatedType<T>> {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseDTO implements PaginatedType<T> {
    constructor(props: PaginatedType<T>) {
      Object.assign(this, props);
    }

    @Field(() => [classRef])
    readonly data: T[];

    @Field(() => Int)
    page: number;

    @Field(() => Int)
    per_page: number;

    @Field(() => Int)
    total: number;
  }

  return PaginatedResponseDTO as Type<PaginatedType<T>>;
}
