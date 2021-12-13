import { Module } from '@nestjs/common';
import { CatResolver } from './cat.resolver';
import { CatService } from './cat.service';
import {Cat} from "./models/cat.model";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Cat])],
    providers: [CatResolver, CatService],
})
export class CatModule {}