import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payment } from './Models/payment.models';
import { MailModule } from '../mail/mail.module';
import { JwtModule } from '@nestjs/jwt';
import { ContractModule } from '../contract/contract.module';
import { Contract } from '../contract/Models/contract.models';
import { Client } from '../client/Models/client.models';

@Module({
  imports: [SequelizeModule.forFeature([Payment, Contract, Client]),
  MailModule,
  JwtModule,
  ContractModule,

],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
