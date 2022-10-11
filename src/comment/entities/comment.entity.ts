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
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  readonly comment: string;

  @Column()
  readonly user: string;

  @ManyToOne(() => Movie, (mov) => mov.name, { onDelete: 'CASCADE' })
  @JoinColumn()
  movie: Movie;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
