import {Item} from "../Item";
import * as config from "../../config.json";

/*
An interface would work as well though it would result with some more duplicated code
 */
export abstract class UpdateStrategy {

    protected maxQuality = config.maxQuality;
    protected minQuality = config.minQuality;

    // not a  big fan of the name as quality not always degrades
    protected degradationFactor = 0;

    public getDegradationFactor() {

        return this.degradationFactor;
    }

    public updateQuality(item: Item, day: number): Item {

        if (this.isNegativeQuality(item)) {

            item.quality = 0;

            return item;
        }

        if (this.isMaxQuality(item) ) {

            return item;
        }

        if (item.quality <= this.maxQuality && item.quality > this.minQuality) {

            if (item.sellIn < day) {

                item.quality = item.quality + this.degradationFactor;
            }

            item.quality = item.quality + this.degradationFactor;

        }

        return item;
    }

    protected isMaxQuality(item: Item) : boolean {

        return item.quality == this.maxQuality
    }

    protected isNegativeQuality(item: Item) : boolean {

        return item.quality < 0;
    }
}