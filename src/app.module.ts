import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CommentModule } from './comment/comment.module';
import { MovieModule } from './movie/movie.module';
import { RatingModule } from './rating/rating.module';
import { ReactionModule } from './reaction/reaction.module';
import { typeOrmConfig } from './utils/typorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    CommentModule,
    MovieModule,
    RatingModule,
    ReactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
