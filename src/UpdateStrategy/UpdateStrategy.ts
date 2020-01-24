import {Item} from "../Item";

export abstract class UpdateStrategy {

    protected maxQuality;
    protected minQuality;
    protected degradationFactor = -1;

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