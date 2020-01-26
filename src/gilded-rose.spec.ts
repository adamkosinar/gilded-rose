import { expect } from "chai";
import { GildedRose } from "./gilded-rose";
import {Item} from "./Item";
import {UpdateStrategyProviderMock} from "./UpdateStrategyProvider/UpdateStrategyProviderMock";


/*
Since most of the logic  has been delegated to strategies and provided there is not much left to test here
this is more of a demonstration how injecting and mocking dependencies could work to  make things less coupled.
 */
describe("Gilded Rose",  () => {

    let items: Array<Item> = [];

    beforeEach(() => {

        items = [
            new Item("foo", 0, 0),
            new Item("foo2", 0, 0),
            new Item("foo3", 0, 0),
        ];

    });

    it("Should call update quality per each item in collection", () => {

        const strategyProvider = new UpdateStrategyProviderMock();
        const gildedRose = new GildedRose(strategyProvider, items);

        gildedRose.updateQuality(1);

        expect(strategyProvider.updateStrategy.callCount).to.equal(items.length);
    });

});
