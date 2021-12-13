import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Cat} from "../../cat/models/cat.model";

@ObjectType({ description: 'man' })
@Entity()
export class Man {
    @Field(type => ID)
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Field()
    @Column({ length: 500, nullable: false })
    name: string;

    @Field()
    @Column({ length: 500, nullable: false })
    position: string;

    @Field(type => Cat)
    @ManyToOne(type => Cat, cat => cat.men)
    cat: Cat;
}