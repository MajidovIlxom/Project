import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './Models/user.models';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from 'src/mail/mail.module';
import { SmsModule } from '../sms/sms.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule.register({}),
    MailModule,
    SmsModule
  ],
  controllers: [UserController],
  providers: [UserService],
  // exports: [UserService]
})
export class UserModule {}
