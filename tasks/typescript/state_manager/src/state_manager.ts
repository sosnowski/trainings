interface StateCallback {
    (newState: State) : void
}

class StateManager {

    private state: State;

    public constructor(initialState?: State) {
        this.state = initialState || defaultState;
    }

    public dispatch(action: Action) {

    }

    public subscribe(callback: StateCallback) {

    }

    private notifySubscribers(newState: State) {

    }
}

export { StateManager };