
interface CollectionMapper<T> {
    (element: T, index: number, collection: ReadonlyCollection<T>) : T
};

class ReadonlyCollection<T> {

    private data: ReadonlyArray<T>;

    constructor(...args: T[]) {
        this.data = args;
    }

    public get(index: number): T {
        return this.data[index];
    }

    public toArray() : T[] {
        return <Array<T>>this.data;
    }

    public add(...args: T[]): ReadonlyCollection<T> {
        return new ReadonlyCollection<T>(...[...this.data, ...args]);
    }

    public remove(...args: T[]): ReadonlyCollection<T> {
        let res = this.data.filter((element) => {
            return args.indexOf(element) === -1;
        });
        return new ReadonlyCollection<T>(...res);
    }

    public map(callback: CollectionMapper<T>) : ReadonlyCollection<T> {
        let res = this.data.map((element, index) => {
            return callback(element, index, this);
        });
        return new ReadonlyCollection<T>(...res);
    }

    get length(): number {
        return this.data.length;
    }
}

export { ReadonlyCollection, CollectionMapper };