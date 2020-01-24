import {expect} from "chai";
import {DefaultUpdateStrategy} from "./DefaultUpdateStrategy";
import {Item} from "../Item";
import {ConjuredItemUpdateStrategy} from "./ConjuredItemUpdateStrategy";

const strategy = new ConjuredItemUpdateStrategy();

describe("ConjuredItemUpdateStrategy",  () => {


    it("Quality of an item should not be negative", () => {

        let item = strategy.updateQuality(new Item(
            "ConjuredItem",
            10,
            0
        ), 1);

        expect(item.quality).to.equal(0);
    });

    it("Quality of an item should not be negative even if negative value is provided", () => {

        let item = strategy.updateQuality(new Item(
            "ConjuredItem",
            10,
            -1
        ), 1);

        expect(item.quality).to.equal(0);
    });

    it("Quality of an item should degrade", () => {

        let quality = 2;

        let item = strategy.updateQuality(new Item(
            "ConjuredItem",
            10,
            quality
        ), 1);

        expect(item.quality).to.equal(quality + strategy.getDegradationFactor());
    });

    it("Quality of an item should degrade twice as quickly if pass sell date", () => {

        let quality = 4;

        let item = strategy.updateQuality(new Item(
            "ConjuredItem",
            10,
            quality
        ), 11);

        expect(item.quality).to.equal(quality + strategy.getDegradationFactor() *2);
    });

    it("Conjured items should degrade twice as fast as normal items", () => {

        const defaultUpdateStrategy = new DefaultUpdateStrategy();

        let quality = 10,
            day = 1;

        let conjuredItem = strategy.updateQuality(new Item(
            "ConjuredItem",
            10,
            quality
        ), day);

        expect(conjuredItem.quality).to.equal(quality + defaultUpdateStrategy.getDegradationFactor() *2);
    });

});