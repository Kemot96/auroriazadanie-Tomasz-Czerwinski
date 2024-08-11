export interface ReviewEntityInterface {
  id?: number;
  email: string;
  name: string;
  description: string | null;
  rating: number;
  rate_date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ReviewExternalRecordPlatform {
  name: string;
  image: string;
  short_image: string;
  url: string;
  background_color: string | null;
}

export interface ReviewExternalRecord {
  //TODO: implement this
  id: number;
  email: string;
  name: string;
  description: string;
  rate: number;
  rate_date: string;
  verified: boolean;
  platform: {
    name: string;
    image: string;
    short_image: string;
    url: string;
    background_color: string | null;
  };
  images: string[];
}

export type ExternalPaginatedType<T> = {
  //TODO: implement this, difference between external and domain paginated type is: page --> current_page,
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
};

export interface PaginatedRequest {
  page: number;
  per_page: number;
}
export interface PaginatedType<T> {
  //TODO: implement this
  data: T[];
  page: number;
  per_page: number;
  total: number;
}
export interface GetSingleReviewRequest {
  id: number;
}
