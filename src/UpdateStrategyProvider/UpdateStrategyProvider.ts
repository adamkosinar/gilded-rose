import * as config from "../../config.json";
import {Item} from "../Item";
import {UpdateStrategy} from "../UpdateStrategy/UpdateStrategy";
import {DefaultUpdateStrategy} from "../UpdateStrategy/DefaultUpdateStrategy";
import * as _ from "lodash";
import {EventItemUpdateStrategy} from "../UpdateStrategy/EventItemUpdateStrategy";
import {MaturingItemUpdateStrategy} from "../UpdateStrategy/MaturingItemUpdateStrategy";
import {LegendaryItemUpdateStrategy} from "../UpdateStrategy/LegendaryItemUpdateStrategy";
import {ConjuredItemUpdateStrategy} from "../UpdateStrategy/ConjuredItemUpdateStrategy";


/*
Provider resolves  what strategy should be used based on data within the item instance
I do realize that all explicit instantiations should be delegated to factories though
I do not think it is completely necessary here.
*/
export class UpdateStrategyProvider {

    /*
    I read the item definitions from the config, which is not ideal.
    In the real world this would be probably a  file or a database.
     */
    private eventTypes = config.eventItems;
    private maturingTypes = config.maturingItems;
    private legendaryTypes = config.legendaryItems;


    public resolveStrategyFor(item: Item) : UpdateStrategy {

        if (this.isEventType(item)) {

            return new EventItemUpdateStrategy();
        }

        if (this.isMaturingType(item)) {

            return new MaturingItemUpdateStrategy();
        }

        if (this.isLegendaryType(item)) {

            return new LegendaryItemUpdateStrategy();
        }

        if (this.isConjuredItem(item)) {

            return new ConjuredItemUpdateStrategy();
        }

        return new DefaultUpdateStrategy();
    }

    private isEventType(item: Item) : boolean {

        return !(_.indexOf(this.eventTypes, item.name));

    }

    private isMaturingType(item: Item) : boolean {

        return !(_.indexOf(this.maturingTypes, item.name));

    }

    private isLegendaryType(item: Item) : boolean {

        return !(_.indexOf(this.legendaryTypes, item.name));

    }

    private isConjuredItem(item: Item): boolean {

        let name = item.name.toLowerCase();

        return name.includes("conjured");
    }
}