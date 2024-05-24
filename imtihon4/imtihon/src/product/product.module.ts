import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './Models/product.models';
import { FilesModule } from '../files/files.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Product]), 
  FilesModule,
  JwtModule
],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
