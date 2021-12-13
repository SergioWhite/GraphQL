import {Field, ID, InputType, ObjectType} from '@nestjs/graphql';

@InputType({ description: 'cat' })
export class CatInputModel {
    @Field(type => ID)
    id: string;
}