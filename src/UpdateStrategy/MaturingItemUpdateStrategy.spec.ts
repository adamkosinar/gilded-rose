import {expect} from 'chai';
import {Item} from "../Item";
import {MaturingItemUpdateStrategy} from "./MaturingItemUpdateStrategy";

const strategy = new MaturingItemUpdateStrategy()

describe('MaturingItemUpdateStrategy',  () => {


    it('Quality of an item should not be negative', () => {

        let item = strategy.updateQuality(new Item(
            'maturingItem',
            10,
            0
        ), 1);

        expect(item.quality).to.equal(0);
    });

    it('Quality of an item should not be negative even if negative value is provided', () => {

        let item = strategy.updateQuality(new Item(
            'maturingItem',
            10,
            -1
        ), 1);

        expect(item.quality).to.equal(0);
    });

    it('Quality of a maturing item should increase', () => {

        let quality = 2;

        let item = strategy.updateQuality(new Item(
            'maturingItem',
            10,
            quality
        ), 1);

        expect(item.quality).to.equal(quality + strategy.getDegradationFactor());
    });

    it('Quality of a maturing item should increase twice as quickly if pass sell date', () => {

        let quality = 4;

        let item = strategy.updateQuality(new Item(
            'maturingItem',
            10,
            quality
        ), 11);

        expect(item.quality).to.equal(quality + strategy.getDegradationFactor() *2);
    });

    it('Quality of a maturing item should increase twice as quickly if pass sell date', () => {

        let quality = 4;

        let item = strategy.updateQuality(new Item(
            'maturingItem',
            10,
            quality
        ), 11);

        expect(item.quality).to.equal(quality + strategy.getDegradationFactor() *2);
    });

    it('Quality of a maturing item should not be more than maximal quality', () => {

        let quality = 50;

        let item = strategy.updateQuality(new Item(
            'maturingItem',
            10,
            quality
        ), 11);

        expect(item.quality).to.equal(50);
    });

});