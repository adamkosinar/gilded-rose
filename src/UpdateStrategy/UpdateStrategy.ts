import {Item} from "../Item";
import * as config from "../../config.json";

export abstract class UpdateStrategy {

    protected maxQuality;
    protected minQuality;
    protected degradationFactor = -1;

    public getDegradationFactor() {

        return this.degradationFactor;

    }

    protected isMaxQuality(item: Item) {

        return item.quality == this.maxQuality

    }

    protected isNegativeQuality(item: Item) {

        return item.quality < 0;
    }
}