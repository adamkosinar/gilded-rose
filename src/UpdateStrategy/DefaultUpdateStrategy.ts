import {Item} from "../Item";
import * as config from "../../config.json";

export class DefaultUpdateStrategy {

    protected maxQuality;
    protected minQuality;
    protected degradationFactor = -1;

    constructor() {

        this.maxQuality = config.maxQuality;
        this.minQuality = config.minQuality;
    }

    public updateQuality(item: Item, day: number) {

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


    public getDegradationFactor() {

        return this.degradationFactor;

    }

    protected isMaxQuality(item) {

        return item.quality == this.maxQuality

    }

    protected isNegativeQuality(item: Item) {

        return item.quality < 0;
    }
}