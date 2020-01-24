import {DefaultUpdateStrategy} from "./DefaultUpdateStrategy";

export class ConjuredItemUpdateStrategy extends DefaultUpdateStrategy{

    constructor() {
        super();
        this.degradationFactor = this.degradationFactor * 2;
    }

}