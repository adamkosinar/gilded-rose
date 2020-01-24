import {UpdateStrategy} from "./UpdateStrategy";

export class MaturingItemUpdateStrategy extends UpdateStrategy{

    constructor() {
        super();
        this.degradationFactor = 1;
    }


}