import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../../src/app.module";
import { INestApplication } from "@nestjs/common";

const gql = "/graphql";

describe("GraphQL AppResolver (e2e) {Supertest}", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe("health", () => {
    it("should return status 200", () => {
      return request(app.getHttpServer()).get("/health").expect(200);
    });
  });

  describe(gql, () => {
    describe("reviews", () => {
      it("should return paginated reviews", () => {
        return request(app.getHttpServer())
          .post(gql)
          .send({
            query: `
                query GetAllReviews($params: GetReviewsRequestDto!) {
                    getAllReviews(params: $params) {
                        page
                        per_page
                        total
                        data{
                            id
                            email
                            name
                        }
                    }
            }
              `,
            variables: {
              params: {
                page: 1,
                per_page: 3,
              },
            },
          })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.getAllReviews).toEqual({
              page: 1,
              per_page: 3,
              total: 10,
              data: [
                {
                  id: 1,
                  email: "example@xx.pl",
                  name: "Lukas",
                },
                {
                  id: 2,
                  email: "example@example.com",
                  name: "John",
                },
                {
                  id: 3,
                  email: "user123@example.com",
                  name: "Anna",
                },
              ],
            });
          });
      });
      describe("review", () => {
        it("should return review", () => {
          return request(app.getHttpServer())
            .post(gql)
            .send({
              query: `
                  query getReview($params: GetReviewRequestDto!) {
                    getReview(params: $params) {
                      id
                      email
                      name
                    }
                  }
                `,
              variables: {
                params: {
                  id: 1,
                },
              },
            })
            .expect(200)
            .expect((res) => {
              expect(res.body.data.getReview).toEqual({
                id: 1,
                email: "example@xx.pl",
                name: "Lukas",
              });
            });
        });
      });
    });
  });
});
