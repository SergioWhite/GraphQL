import { Injectable } from '@nestjs/common';
import { NewCatInput } from './dto/new-cat.input';
import { Cat } from './models/cat.model';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>,
    ) {}

    async create(data: NewCatInput): Promise<Cat> {
        return this.catRepository.save(data);
    }

    async findOneById(id: number): Promise<Cat> {
        return this.catRepository.findOne(id);
    }

    async findAll(): Promise<Cat[]> {
        return this.catRepository.find();
    }
}