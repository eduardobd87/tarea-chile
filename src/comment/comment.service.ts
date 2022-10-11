import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const newCom = Comment.create<Comment>(createCommentDto);
    return await Comment.save(newCom);
  }

  async findAll(): Promise<Comment[]> {
    return await Comment.find();
  }

  async findOne(id: string): Promise<Comment> {
    const com = await Comment.findOneBy({ id });
    if (!com) throw new NotFoundException(`Comment not exist`);

    return await Comment.findOne({ where: { id }, relations: ['movie'] });
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const com = await Comment.findOneBy({ id });
    if (!com) throw new NotFoundException(`Comment not exist`);

    return await Comment.update<Comment>(id, updateCommentDto);
  }

  async remove(id: string) {
    const com = await Comment.findOneBy({ id });
    if (!com) throw new NotFoundException(`Comment not exist`);
    return await Comment.delete({ id });
  }
}
