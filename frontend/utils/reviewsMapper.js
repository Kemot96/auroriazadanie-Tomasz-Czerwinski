export default function reviewsMapper(data) {
  const mapReview = (review) => ({
    id: review.id,
    email: review.email,
    name: review.name,
    description: review.description,
    rating: review.rating,
    rate_date: formatDateToString(new Date(review.rate_date)),
    createdAt: formatDateToString(new Date(review.createdAt)),
    updatedAt: formatDateToString(new Date(review.updatedAt)),
  });

  return Array.isArray(data) ? data.map(mapReview) : mapReview(data);
}
