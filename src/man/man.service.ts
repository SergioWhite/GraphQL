import { Injectable } from '@nestjs/common';
import { NewManInput } from './dto/new-man.input';
import { Man } from './models/man.model';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class ManService {
    constructor(
        @InjectRepository(Man)
        private manRepository: Repository<Man>,
    ) {}

    async create(data: NewManInput): Promise<Man> {
        return this.manRepository.save(data);
    }

    async findOneById(id: number): Promise<Man> {
        return this.manRepository.findOne(id);
    }

    async findAll(): Promise<Man[]> {
        return this.manRepository.find();
    }
}