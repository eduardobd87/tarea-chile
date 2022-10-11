import { IsNotEmpty, IsString } from 'class-validator';
import { Movie } from '../../movie/entities/movie.entity';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsString()
  user: string;

  @IsNotEmpty()
  movie: Movie;
}
