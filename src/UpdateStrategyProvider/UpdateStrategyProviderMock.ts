import {UpdateStrategyProvider} from "./UpdateStrategyProvider";
import {UpdateStrategy} from "../UpdateStrategy/UpdateStrategy";
import {Item} from "../Item";
import {UpdateStrategyMock} from "../UpdateStrategy/UpdateStrategyMock";

export class UpdateStrategyProviderMock extends UpdateStrategyProvider {

    public updateStrategy: UpdateStrategyMock;

    constructor() {
        super();
        this.updateStrategy = new UpdateStrategyMock();
    }

    public resolveStrategyFor(item: Item): UpdateStrategy {

        return this.updateStrategy;
    }

}