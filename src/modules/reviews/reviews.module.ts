import { Module, Provider } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { GetReviewsResolver } from "./queries/get-reviews/get.reviews.resolver";
import { RatingCaptainAdapter } from "./adapters/rating-captain.adapter";
import { RatingCaptainMapper } from "./adapters/rating-captain.mapper";
import { LoggerService } from "./services/logger.service";
import { ScheduleModule } from "@nestjs/schedule";
import { GetAllReviews } from "./queries/get-reviews/get.reviews.handler";

const resolvers: Provider[] = [GetReviewsResolver];

const adapters: Provider[] = [RatingCaptainAdapter];

const commandsHandlers: Provider[] = [];

const appServices: Provider[] = [LoggerService];

const mappers: Provider[] = [RatingCaptainMapper];

const repositories: Provider[] = [];

const queriesHandlers: Provider[] = [GetAllReviews];

@Module({
  imports: [ScheduleModule.forRoot(), CqrsModule],
  providers: [
    ...adapters,
    ...resolvers,
    ...commandsHandlers,
    ...appServices,
    ...mappers,
    ...repositories,
    ...queriesHandlers,
  ],
})
export class ReviewsModule {}
