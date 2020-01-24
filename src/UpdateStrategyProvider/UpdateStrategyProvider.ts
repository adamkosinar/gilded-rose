import * as config from "../../config.json";
import {Item} from "../Item";
import {UpdateStrategy} from "../UpdateStrategy/UpdateStrategy";
import {DefaultUpdateStrategy} from "../UpdateStrategy/DefaultUpdateStrategy";
import * as _ from "lodash";
import {EventItemUpdateStrategy} from "../UpdateStrategy/EventItemUpdateStrategy";
import {MaturingItemUpdateStrategy} from "../UpdateStrategy/MaturingItemUpdateStrategy";

export class UpdateStrategyProvider {

    private eventTypes = config.eventItems;
    private maturingTypes = config.maturingItems;

    public resolveStrategyFor(item: Item) : UpdateStrategy {

        if (this.isEventType(item)) {

            return new EventItemUpdateStrategy();
        }

        if (this.isMaturingType(item)) {

            return new MaturingItemUpdateStrategy();
        }

        return new DefaultUpdateStrategy();
    }

    private isEventType(item: Item) {

        return !(_.indexOf(this.eventTypes, item.name));

    }

    private isMaturingType(item: Item) {

        return !(_.indexOf(this.maturingTypes, item.name));

    }

}