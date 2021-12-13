import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { NewManInput } from './dto/new-man.input';
import { Man } from './models/man.model';
import { ManService } from './man.service';

const pubSub = new PubSub();

@Resolver(of => Man)
export class ManResolver {
    constructor(private readonly manService: ManService) {}

    @Query(returns => Man)
    async man(@Args('id') id: number): Promise<Man> {
        const man = await this.manService.findOneById(id);
        if (!man) {
            throw new NotFoundException(id);
        }
        return man;
    }

    @Query(returns => [Man])
    men(): Promise<Man[]> {
        return this.manService.findAll();
    }

    @Mutation(returns => Man)
    async addMan(
        @Args('newManData') newManData: NewManInput,
    ): Promise<Man> {
        const man = await this.manService.create(newManData);
        pubSub.publish('manAdded', { manAdded: man });
        return man;
    }

    @Subscription(returns => Man)
    manAdded() {
        return pubSub.asyncIterator('manAdded');
    }
}