import {expect} from "chai";
import {Item} from "../Item";
import {EventItemUpdateStrategy} from "./EventItemUpdateStrategy";

const strategy = new EventItemUpdateStrategy();

describe("EventItemUpdateStrategy",  () => {


    it("Quality of an item should not be negative", () => {

        let item = strategy.updateQuality(new Item(
            "eventItem",
            10,
            -1
        ), 1);

        expect(item.quality).to.equal(0);
    });

    it("Quality of an item should not be negative even if negative value is provided", () => {

        let item = strategy.updateQuality(new Item(
            "eventItem",
            10,
            -1
        ), 1);

        expect(item.quality).to.equal(0);
    });

    it("Quality of an event item should increase", () => {

        let quality = 2;

        let item = strategy.updateQuality(new Item(
            "eventItem",
            60,
            quality
        ), 1);

        expect(item.quality).to.equal(quality + strategy.getDegradationFactor());
    });

    it("Quality of an event item should not be more than maximal quality", () => {

        let quality = 50;

        let item = strategy.updateQuality(new Item(
            "eventItem",
            30,
            quality
        ), 1);

        expect(item.quality).to.equal(50);
    });

    it("Quality should drop to zero if it is past sell date",  () => {

        let quality = 2;

        let item = strategy.updateQuality(new Item(
            "eventItem",
            10,
            quality
        ), 20);

        expect(item.quality).to.equal(0);

    });

    it("Quality should increase if there are ten or less days left by two", () => {

        let quality = 2;

        let item = strategy.updateQuality(new Item(
            "eventItem",
            20,
            quality
        ), 10);

        expect(item.quality).to.equal(4);

    });

    it("Quality should increase if there are five or less days left by three", () => {

        let quality = 2;

        let item = strategy.updateQuality(new Item(
            "eventItem",
            20,
            quality
        ), 16);

        expect(item.quality).to.equal(5);

    })

});