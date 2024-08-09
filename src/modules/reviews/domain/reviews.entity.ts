import { ReviewEntityInterface } from "./reviews.types";

export class ReviewEntity implements ReviewEntityInterface {
  readonly id?: number;
  readonly email: string;
  readonly name: string;
  readonly description: string | null;
  readonly rating: number;
  readonly rate_date: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(data: ReviewEntityInterface) {
    Object.assign(this, data);
  }
}
