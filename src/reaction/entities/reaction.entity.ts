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

import { Movie } from '../../movie/entities/movie.entity';

enum ReactionType {
  Like = 'like',
  Love = 'love',
  Care = 'care',
  Haha = 'haha',
  Wow = 'wow',
  Sad = 'sad',
  Angry = 'angry',
}

@Entity()
export class Reaction extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  readonly reaction: ReactionType;

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
