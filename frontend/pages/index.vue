<script setup lang="ts">
const PER_PAGE: number = 3;
const currentPage = useState("currentPage", () => 1);

const query = gql`
  query GetAllReviews($params: GetReviewsRequestDto!) {
    getAllReviews(params: $params) {
      page
      per_page
      total
      data {
        id
        email
        name
        description
        rating
        rate_date
        createdAt
        updatedAt
      }
    }
  }
`;

let total = ref(0);
let reviews: Ref<ReviewEntityInterface[]> = ref([]);

const maxPage = computed(() => {
  return Math.ceil(total.value / PER_PAGE);
});

const params = computed(() => {
  return {
    page: currentPage.value,
    per_page: PER_PAGE,
  };
});

watch(currentPage, () => {
  fetchReviews();
});

async function fetchReviews(): Promise<void> {
  const { data }: { data: Ref<QueryResponse> } = await useAsyncQuery(query, {
    params,
  });
  const response: PaginatedType<ReviewEntityInterface> | undefined =
    data?.value?.getAllReviews;

  if (response) {
    total.value = response.total;
    reviews.value = reviewsMapper(response.data);
  }
}

await fetchReviews();
</script>

<template>
  <section>
    <div class="flex flex-col py-24 md:px-24">
      <ListHeader :totalReviews="total"></ListHeader>
      <div class="flex flex-col md:flex-row mt-8 items-center h-auto md:h-96">
        <ListAverageScore></ListAverageScore>
        <ListReviews :reviews="reviews"></ListReviews>
      </div>
    </div>
    <ListPagination :maxPage="maxPage"></ListPagination>
  </section>
</template>
