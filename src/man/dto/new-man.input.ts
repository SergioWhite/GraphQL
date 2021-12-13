import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';
import {Cat} from "../../cat/models/cat.model";
import {CatInputModel} from "../../cat/models/cat.input.model";

@InputType()
export class NewManInput {
    @Field()
    @MaxLength(30)
    name: string;

    @Field()
    @MaxLength(30)
    position: string;

    @Field(type => CatInputModel)
    cat: CatInputModel;
}