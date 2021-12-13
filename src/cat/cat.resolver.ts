import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewCatInput } from './dto/new-cat.input';
import { Cat } from './models/cat.model';
import { CatService } from './cat.service';

const pubSub = new PubSub();

@Resolver(of => Cat)
export class CatResolver {
    constructor(private readonly catService: CatService) {}

    @Query(returns => Cat)
    async cat(@Args('id') id: number): Promise<Cat> {
        const cat = await this.catService.findOneById(id);
        if (!cat) {
            throw new NotFoundException(id);
        }
        return cat;
    }

    @Query(returns => [Cat])
    cats(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Mutation(returns => Cat)
    async addCat(
        @Args('newCatData') newCatData: NewCatInput,
    ): Promise<Cat> {
        const cat = await this.catService.create(newCatData);
        pubSub.publish('catAdded', { catAdded: cat });
        return cat;
    }

    @Subscription(returns => Cat)
    catAdded() {
        return pubSub.asyncIterator('catAdded');
    }
}