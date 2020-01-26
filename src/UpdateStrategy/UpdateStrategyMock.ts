import {UpdateStrategy} from "./UpdateStrategy";
import {Item} from "../Item";


export class UpdateStrategyMock extends UpdateStrategy {

    public callCount: number = 0;

    updateQuality(item: Item, day: number): Item {

        this.callCount += 1;

        return item;
    }

}