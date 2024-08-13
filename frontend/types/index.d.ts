export {};

declare global {
  interface QueryResponse {
    getAllReviews?: PaginatedType<ReviewEntityInterface>;
    getReview?: ReviewEntityInterface;
  }

  interface ReviewEntityInterface {
    id?: number;
    email: string;
    name: string;
    description: string | null;
    rating: number;
    rate_date: string;
    createdAt: string;
    updatedAt: string;
  }

  interface PaginatedType<T> {
    data: T[];
    page: number;
    per_page: number;
    total: number;
  }
}
