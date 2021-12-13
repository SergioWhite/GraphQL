import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, MaxLength } from 'class-validator';

@InputType()
export class NewCatInput {
    @Field()
    @MaxLength(30)
    name: string;

    @Field({ nullable: true })
    @IsOptional()
    age?: number;

    @Field()
    @MaxLength(30)
    color: string;
}