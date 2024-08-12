<script setup>
const reviewID = ref("");
const review = useState('review');

const query = gql`
query getReview($params: GetReviewRequestDto!) {
  getReview(params: $params) {
    id
    email
    name
    description
    rating
    rate_date
    product
    createdAt
    updatedAt
  }
}
`;

async function findReview() {
    if (reviewID.value.trim() !== '') {
        const { data } = await useAsyncQuery(query, { params: { id: Number(reviewID.value) } });
        const response = data?.value?.getReview;

        if (response) {
            review.value = reviewsMapper(response);
        }
        else {
            review.value = null;
        }
    }
}
</script>

<template>
    <div class="relative flex flex-row items-center">
        <input v-model="reviewID" type="text" placeholder="Wprowadź id"
            class="py-2 px-8 rounded-full shadow-xl-gray w-64">
        </input>
        <button class="absolute ml-56 py-3 px-3 rounded-full text-white font-medium inline-block bg-secondary-400 hover:bg-amber-600"
            @click="findReview"><img width="17px" src="/icons/magnifying-glass.svg"></img></button>
    </div>
</template>