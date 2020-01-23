import {Item} from "../Item";
import * as config from "../../config.json";
import {DefaultUpdateStrategy} from "./DefaultUpdateStrategy";


export class EventItemUpdateStrategy extends DefaultUpdateStrategy {

    private totalDays;

    constructor() {
        super();

        this.totalDays = config.days;
        this.degradationFactor = 1;
    }

    public updateQuality(item: Item, day: number): Item {

        if (this.isNegativeQuality(item)) {

            item.quality = 0;

            return item;

        }

        if (this.isMaxQuality(item) ) {

            return item;
        }

        if (item.sellIn < day) {

            item.quality = 0;

            return item;
        }

        this.degradationFactor = this.setDegradationFactor(day);

        item.quality = item.quality + this.degradationFactor;

        return item;
    }

    private setDegradationFactor(day) {

        let daysLeft = this.totalDays - day;

        if (daysLeft <= 5) {

            return 3;

        }

        if (daysLeft <= 10) {

            return 2;

        }

        return this.degradationFactor;
    }
}