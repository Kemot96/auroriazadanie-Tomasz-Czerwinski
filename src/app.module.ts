import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ReviewsModule } from "./modules/reviews/reviews.module";
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from "@nestjs/apollo";
import { ConfigModule } from "@nestjs/config";
import { HealthModule } from "./health/health.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),
    ReviewsModule,
    HealthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
