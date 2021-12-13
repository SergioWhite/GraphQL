import { Module } from '@nestjs/common';
import { ManResolver } from './man.resolver';
import { ManService } from './man.service';
import {Man} from "./models/man.model";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Man])],
    providers: [ManResolver, ManService],
})
export class ManModule {}