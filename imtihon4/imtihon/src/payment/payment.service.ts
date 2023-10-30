import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './Models/payment.models';
import { Response } from 'express'
import { MailService } from '../mail/mail.service';
import { Contract } from '../contract/Models/contract.models';
import { Client } from '../client/Models/client.models';

@Injectable()
export class PaymentService {
  constructor(@InjectModel(Payment) private readonly paymentRepo: typeof Payment,
  private readonly mailService: MailService,
  @InjectModel(Contract) private readonly conteractRepo: typeof Contract,
  @InjectModel(Client) private readonly clientRepo: typeof Client
  ){}

  async create(createPaymentDto: CreatePaymentDto) {
    const payment = await this.paymentRepo.create(createPaymentDto)
    return payment;
  }

  async findAll() {
    const payment = await this.paymentRepo.findAll({include: {all: true}})
    return payment;
  }

  async findOne(id: number) {
    const payment = await this.paymentRepo.findOne({where: {id: id}})
    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepo.update(updatePaymentDto, {where: {id: id}, returning: true}) 
    return payment[1][0]
  }

 
}
