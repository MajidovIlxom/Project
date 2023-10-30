import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Admin } from 'src/admin/Models/admin.models';
import { Client } from '../client/Models/client.models';


@Injectable()
export class MailService {
  sendConfirmation(arg0: Admin) {
    throw new Error('Method not implemented.');
  }
  constructor(private mailerService: MailerService){}

  async sendClientConfirmation(client: Client): Promise<void>{
    const url = `${process.env.API_HOST}/api/client/activate/${client.activation_link}`;
    await this.mailerService.sendMail({
      to: client.email,
      subject: 'Welcome to Market App! Confirum your Email',
      template: "./confirmation",
      context: {
        name: client.username,
        url,
      }
    })
  }
  
  async sendAdminConfirmation(admin: Admin): Promise<void>{
    const url = `${process.env.API_HOST}/api/admin/activate/${admin.activation_link}`;
    await this.mailerService.sendMail({
      to: admin.email,
      subject: 'Welcome to Market App! Confirum your Email',
      template: "./confirmation",
      context: {
        name: admin.username,
        url,
      }
    })
  }
}


