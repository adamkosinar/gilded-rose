import {UpdateStrategy} from "./UpdateStrategy";

export class DefaultUpdateStrategy extends UpdateStrategy{

    constructor() {
        super();
        this.degradationFactor = -1;
    }

}