import {expect} from 'chai';
import {DefaultUpdateStrategy} from "./DefaultUpdateStrategy";
import {Item} from "../Item";

const strategy = new DefaultUpdateStrategy();

describe('DefaultUpdateStrategy',  () => {


    it('Quality of an item should not be negative', () => {

        let item = strategy.updateQuality(new Item(
            'normalItemName',
            10,
            0
        ), 1);

        expect(item.quality).to.equal(0);
    });

    it('Quality of an item should not be negative even if negative value is provided', () => {

        let item = strategy.updateQuality(new Item(
            'normalItemName',
            10,
            -1
        ), 1);

        expect(item.quality).to.equal(0);
    });

    it('Quality of a normal should degrade', () => {

        let quality = 2;

        let item = strategy.updateQuality(new Item(
            'normalItemName',
            10,
            quality
        ), 1);

        expect(item.quality).to.equal(quality + strategy.getDegradationFactor());
    });

    it('Quality of a normal should degrade twice as quickly if pass sell date', () => {

        let quality = 4;

        let item = strategy.updateQuality(new Item(
            'normalItemName',
            10,
            quality
        ), 11);

        expect(item.quality).to.equal(quality + strategy.getDegradationFactor() *2);
    });

});