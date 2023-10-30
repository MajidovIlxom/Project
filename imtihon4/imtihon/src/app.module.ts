import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { ContractModule } from './contract/contract.module';
import { PaymentModule } from './payment/payment.module';
import { MailModule } from './mail/mail.module';
import { FilesModule } from './files/files.module';
import { Admin } from './admin/Models/admin.models';
import { Client } from './client/Models/client.models';
import { Category } from './category/Models/category.models';
import { Contract } from './contract/Models/contract.models';
import { Product } from './product/Models/product.models';
import { Payment } from './payment/Models/payment.models';


@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env', isGlobal: true}),
    ServeStaticModule.forRoot({rootPath: resolve(__dirname, 'static')}),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host: process.env.POSTGREST_HOST,
      port:Number(process.env.POSTGREST_PORT),
      username: process.env.POSTGREST_USER,
      password: String(process.env.POSTGREST_PASSWORD),
      database: process.env.POSTGREST_DB,
      models:[
        Admin,
        Client,
        Category,
        Contract,
        Product,
        Payment,
      ],
      autoLoadModels: true,
      logging: false,  
    }),
    CategoryModule,
    ProductModule,
    ClientModule,
    AdminModule,
    ContractModule,
    PaymentModule,
    MailModule,
    FilesModule,
  ],
})
export class AppModule {}
