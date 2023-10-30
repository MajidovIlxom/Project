import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './Models/admin.models';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';
import { PaymentModule } from '../payment/payment.module';
import { Payment } from '../payment/Models/payment.models';

@Module({
  imports: [
    SequelizeModule.forFeature([Admin, Payment]),
      JwtModule.register({}),
      MailModule,
      // PaymentModule
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService]
})
export class AdminModule {}
