import {DefaultUpdateStrategy} from "./DefaultUpdateStrategy";

export class MaturingItemUpdateStrategy extends DefaultUpdateStrategy{


    constructor() {

        super();
        this.degradationFactor = 1;
    }


}