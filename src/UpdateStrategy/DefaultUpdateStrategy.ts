import {Item} from "../Item";
import * as config from "../../config.json";
import {UpdateStrategy} from "./UpdateStrategy";

export class DefaultUpdateStrategy extends UpdateStrategy{

    protected degradationFactor = -1;

    constructor() {
        super();
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

}