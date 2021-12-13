import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

@Injectable()
export class RecipesService {
    /**
     * MOCK
     * Put some real business logic here
     * Left for demonstration purposes
     */

    async create(data: NewRecipeInput): Promise<Recipe> {
        return {
            id: '100',
            title: data.title,
            description: data.description,
            creationDate: new Date(),
            ingredients: data.ingredients,
        };
    }

    async findOneById(id: string): Promise<Recipe> {
        return {
            id: '1',
            title: 'Тест_1',
            description: 'Тестовое описание_1',
            creationDate: new Date(),
            ingredients: ['Тестовый ингредиент'],
        };
    }

    async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
        return [
            {
                id: '1',
                title: 'Тест_1',
                description: 'Тестовое описание_1',
                creationDate: new Date(),
                ingredients: ['Тестовый ингредиент'],
            },
            {
                id: '2',
                title: 'Тест_2',
                description: 'Тестовое описание_2',
                creationDate: new Date(),
                ingredients: ['Тестовый ингредиент'],
            }
        ];
    }

    async remove(id: string): Promise<boolean> {
        return true;
    }
}