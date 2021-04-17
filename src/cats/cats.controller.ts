import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
// DTO
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // get:list
  @Get()
  getCats(): string {
    return this.catsService.getCat();
  }

  // get:detail
  @Get(':id')
  getCat(@Param() param): string {
    return `ねこのidは${param.id}です！`;
  }

  // post
  @Post()
  async postCat(@Body() createCatDto: CreateCatDto): Promise<string> {
    return '新しいねこ！';
  }
}
