import {Item} from "../Item";
import {UpdateStrategy} from "./UpdateStrategy";


export class EventItemUpdateStrategy extends UpdateStrategy {

    constructor() {
        super();
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

        this.degradationFactor = this.setDegradationFactor(item.sellIn, day);

        item.quality = item.quality + this.degradationFactor;

        return item;
    }

    private setDegradationFactor(sellIn, day) {

        let daysLeft = sellIn - day;

        if (daysLeft <= 5) {

            return 3;

        }

        if (daysLeft <= 10) {

            return 2;

        }

        return this.degradationFactor;
    }
}