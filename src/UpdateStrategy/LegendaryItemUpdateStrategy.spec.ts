import {expect} from "chai";
import {Item} from "../Item";
import {LegendaryItemUpdateStrategy} from "./LegendaryItemUpdateStrategy";

const strategy = new LegendaryItemUpdateStrategy();

describe("LegendaryItemUpdateStrategy",  () => {


    it("Quality of a legendary item never changes", () => {

        let item = strategy.updateQuality(new Item(
            "legendary",
            10,
            50
        ), 1);

        expect(item.quality).to.equal(50);
    });

    it("Sulfuras has always 80 quality", () => {

        let item = strategy.updateQuality(new Item(
            "This is Sulfuras item name",
            10,
            40
        ), 1);

        expect(item.quality).to.equal(80);
    });


});