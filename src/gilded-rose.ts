import {Item} from "./Item";
import {UpdateStrategyProvider} from "./UpdateStrategyProvider/UpdateStrategyProvider";
import * as _ from "lodash";


export class GildedRose {

    items: Array<Item>;

    constructor(private updateStrategyProvider: UpdateStrategyProvider, items = [] as Array<Item>) {


        this.items = items;
    }

    updateQuality(day) {

        this.items = _.map(this.items, (item) => {

            let strategy = this.updateStrategyProvider.resolveStrategyFor(item);

            return strategy.updateQuality(item, day);

        });

        return this.items;
    }
}
