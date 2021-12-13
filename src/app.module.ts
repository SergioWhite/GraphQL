import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';
import {CatModule} from "./cat/cat.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ManModule} from "./man/man.module";

@Module({
    imports: [
        RecipesModule,
        CatModule,
        ManModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '',
            database: 'postgres',
            entities: ['dist/**/*.model.js'],
            synchronize: true,
        }),
    ],
})
export class AppModule {}