export default function reviewsMapper(
  data: ReviewEntityInterface | ReviewEntityInterface[]
): ReviewEntityInterface[] {
  const mapReview = (review: ReviewEntityInterface) => ({
    id: review.id,
    email: review.email,
    name: review.name,
    description: review.description,
    rating: review.rating,
    rate_date: formatDateToString(new Date(review.rate_date)),
    createdAt: formatDateToString(new Date(review.createdAt)),
    updatedAt: formatDateToString(new Date(review.updatedAt)),
  });

  const reviewsArray = Array.isArray(data) ? data : [data];

  return reviewsArray.map(mapReview);
}
