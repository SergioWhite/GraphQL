import {Field, ID, InputType, ObjectType} from '@nestjs/graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Man} from "../../man/models/man.model";

@ObjectType({ description: 'cat' })
@Entity()
export class Cat {
    @Field(type => ID)
    @PrimaryGeneratedColumn('increment')
    id: string;

    @Field()
    @Column({ length: 500, nullable: false })
    name: string;

    @Field({ nullable: true })
    @Column('int', { nullable: true })
    age?: number;

    @Field()
    @Column({ length: 500, nullable: false })
    color: string;

    @Field(type => [Man], { nullable: true })
    @OneToMany(type => Man, man => man.cat)
    men: Man[]
}