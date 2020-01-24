import {UpdateStrategy} from "./UpdateStrategy";
import {Item} from "../Item";

export class LegendaryItemUpdateStrategy extends  UpdateStrategy {


    public updateQuality(item: Item, day: number): Item {

        if (this.isSulfuras(item)) {

            item.quality = 80;

        }

        return item;

    }

    private isSulfuras(item: Item): boolean {

        let name = item.name.toLowerCase();

        return name.includes("sulfuras");
    }

}