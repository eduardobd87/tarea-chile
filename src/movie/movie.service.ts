import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie = Movie.create<Movie>(createMovieDto);
    return await Movie.save(newMovie);
  }

  async findAll(): Promise<Movie[]> {
    return await Movie.find();
  }

  async findOne(id: string): Promise<Movie> {
    const mov = await Movie.findOneBy({ id });
    if (!mov) throw new NotFoundException(`Movie not exist`);

    return await Movie.findOneBy({ id });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const mov = await Movie.findOneBy({ id });
    if (!mov) throw new NotFoundException(`Movie not exist`);

    return await Movie.update(id, updateMovieDto);
  }

  async remove(id: string) {
    const mov = await Movie.findOneBy({ id });
    if (!mov) throw new NotFoundException(`Movie not exist`);

    return await Movie.delete(id);
  }
}
