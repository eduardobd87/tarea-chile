import { Movie } from '../../movie/entities/movie.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  readonly rating: number;

  @Column()
  readonly user: string;

  @ManyToOne(() => Movie, (mov) => mov.name)
  @JoinColumn()
  movie: Movie;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
