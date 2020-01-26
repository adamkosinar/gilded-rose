import {UpdateStrategyProvider} from "./UpdateStrategyProvider";
import {UpdateStrategy} from "../UpdateStrategy/UpdateStrategy";
import {Item} from "../Item";
import {UpdateStrategyMock} from "../UpdateStrategy/UpdateStrategyMock";

/*
Also a good candidate for an interface or abstract class though I am only doing this to be able to
override the provider in unit tests. And also I have no idea how I would call the interface :)
 */
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