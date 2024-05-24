import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Contract } from './Models/contract.models';

@Injectable()
export class ContractService {
  constructor(@InjectModel(Contract) private readonly contractRepo: typeof Contract){}



  async create(createContractDto: CreateContractDto) {
    const contract = await this.contractRepo.create(createContractDto)
    return contract;
  }

  async findAll() {
    const contract = await this.contractRepo.findAll({include: {all: true}})
    return contract;
  }

  async findOne(id: number) {
    const contract = await this.contractRepo.findOne({where: {id: id}, include: {all: true}})
    return contract;
  }

  async update(id: number, updateContractDto: UpdateContractDto) {
    const contract = await this.contractRepo.update(updateContractDto, {where: {id: id}, returning: true} )
    return contract[1][0]
  }

  async updateContract(id) {
    const updatedContract = await this.contractRepo.update(
      { is_active: false },
      { where: { id: id, is_active: true }, returning: true }
    );
  
    if (!updatedContract[0]) {
      throw new BadRequestException("the contract is inactive");
    }
  
    const response = {
      message: "The contract was successfully deleted",
      Contract: updatedContract[1][0] // Yangilangan shartnoma
    };
  
    return response;
  }
}
