import { expect } from 'chai';
import { GildedRose } from '../src/gilded-rose';
import {Item} from '../src/Item';

xdescribe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        //expect(items[0].name).to.equal('fixme');
    });

});
