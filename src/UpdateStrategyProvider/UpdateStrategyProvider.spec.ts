import {expect} from "chai";
import {Item} from "../Item";
import {UpdateStrategyProvider} from "./UpdateStrategyProvider";
import {DefaultUpdateStrategy} from "../UpdateStrategy/DefaultUpdateStrategy";
import {EventItemUpdateStrategy} from "../UpdateStrategy/EventItemUpdateStrategy";
import {MaturingItemUpdateStrategy} from "../UpdateStrategy/MaturingItemUpdateStrategy";
import {LegendaryItemUpdateStrategy} from "../UpdateStrategy/LegendaryItemUpdateStrategy";

const provider = new UpdateStrategyProvider();

describe("UpdateStrategyProvider",  () => {

    it("should resolve right strategy based on item  name", () => {

        let strategy = provider.resolveStrategyFor(new Item("defaultName", 10, 10));

        expect(strategy).to.be.instanceOf(DefaultUpdateStrategy);

        strategy = provider.resolveStrategyFor(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10));

        expect(strategy).to.be.instanceOf(EventItemUpdateStrategy);

        strategy = provider.resolveStrategyFor(new Item("Aged Brie", 10, 10));

        expect(strategy).to.be.instanceOf(MaturingItemUpdateStrategy);

        strategy = provider.resolveStrategyFor(new Item("Sulfuras, Hand of Ragnaros", 10, 10));

        expect(strategy).to.be.instanceOf(LegendaryItemUpdateStrategy);
    });

});