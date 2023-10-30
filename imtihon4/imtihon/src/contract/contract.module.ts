import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Contract } from './Models/contract.models';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [SequelizeModule.forFeature([Contract]),
  JwtModule,
  
],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}
