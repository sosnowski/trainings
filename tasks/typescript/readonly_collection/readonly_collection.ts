
interface CollectionMapper<T> {
    (element: T, index: number, collection: ReadonlyCollection<T>) : T
};

class ReadonlyCollection {

    private data;

    constructor() {

    }

    public get() {

    }

    public toArray() {
    }

    public add(){

    }

    public remove(){

    }

    public map() {

    }

    get length() {
    }
}

export { ReadonlyCollection, CollectionMapper };