import { Module } from '@nestjs/common';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';


@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([Product])]
 
})
export class MastersModule {}
