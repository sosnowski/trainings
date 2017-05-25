import 'jasmine';
import { ReadonlyCollection } from '../readonly_collection';

describe('ReadonlyCollection', () => {

    it('Should check a dummy test', () => {
        expect(true).toBe(true);
    })

    describe('Creating collection', () => {
        it('Should return some value', () => {
            let inst = new ReadonlyCollection<number>();
            expect(inst).toBeDefined();
            expect(typeof inst).toBe('object');
        });

        it('Should return an instance of a  class', () => {
            let inst = new ReadonlyCollection<number>();
            expect(inst instanceof ReadonlyCollection).toBe(true)
        });

        it('Should create a collection based on list of arguments', () => {
            let inst = new ReadonlyCollection<number>(1, 2, 3);
            expect(inst.get(0)).toBe(1)
            expect(inst.get(1)).toBe(2);
            expect(inst.get(2)).toBe(3);
        });
        
        it('Should create collection with a different type', () => {
            let inst = new ReadonlyCollection<string>('a', 'b', 'c');
            expect(inst.get(0)).toBe('a');
            expect(inst.get(1)).toBe('b');
            expect(inst.get(2)).toBe('c');
        });
    });

    describe('toArray', () => {
        it('Should return an empty array', () => {
            let inst = new ReadonlyCollection<number>();
            expect(inst.toArray()).toEqual([]);
        });

        it('Should retun an instance of an Array class', () => {
            let inst = new ReadonlyCollection<number>(1, 2, 3);
            expect(inst.toArray() instanceof Array).toBe(true);
        });

        it('Should retun an array of elements', () => {
            let inst = new ReadonlyCollection<number>(1, 2, 3);
            expect(inst.toArray()).toEqual([1, 2, 3]);
        });

        it('Collections with the same content should return the same array', () => {
            let inst = new ReadonlyCollection<number>(1, 2, 3),
                inst2 = new ReadonlyCollection<number>(1, 2, 3);
            expect(inst.toArray()).toEqual(inst2.toArray());
        });
    });

    describe('Collection Length', () => {
        let inst: ReadonlyCollection<number>;
        beforeEach(() => {
            inst = new ReadonlyCollection<number>(1, 2, 3, 4);
        });

        it('Should return a length of a collection', () => {
            expect(inst.length).toEqual(4);
        })

        // it('Should be a readonly property!', () => {
        //     inst.length = 66;
        //     expect(inst.length).to.equal(4);
        // });
    });

    describe('Adding elements', () => {
        let inst: ReadonlyCollection<number>;

        beforeEach(() => {
            inst = new ReadonlyCollection<number>(1, 2);
        });

        it('Should return new collection', () => {
            let newInst = inst.add(3);
            expect(newInst).not.toBe(inst);
        });

        it('Should not modify the original collection', () => {
            let newInst = inst.add(3);
            expect(inst.toArray()).toEqual([1, 2]);
        });

        it('Should append the element to the list', () => {
            let newInst = inst.add(3);
            expect(newInst.get(2)).toBe(3);
        });

        it('Should update collection length properly', () => {
            let newInst = inst.add(3);
            expect(newInst.length).toBe(3);
        });

        it('Should add three elements to the list', () => {
            let newInst = inst.add(3, 4, 5);
            expect(newInst.toArray()).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe('Removing elements', () => {
        let inst: ReadonlyCollection<number>, newInst: ReadonlyCollection<number>;
        beforeEach(() => {
            inst = new ReadonlyCollection<number>(1, 2, 3, 4, 5, 4);
            newInst = inst.remove(3, 4);
        });

        it('Should return a new instance of a collection', () => {
            expect(newInst instanceof ReadonlyCollection).toBe(true)
            expect(newInst).not.toBe(inst);
        });

        it('Should not modify original collection', () => {
            expect(inst.toArray()).toEqual([1, 2, 3, 4, 5, 4]);
        });

        it('Should remove provided values from a new collection', () => {
            expect(newInst.toArray()).toEqual([1, 2, 5]);
        });
    });

    describe('Mapping elements', () => {
        let inst: ReadonlyCollection<number>, newInst: ReadonlyCollection<number>;
        beforeEach(() => {
            inst = new ReadonlyCollection<number>(1, 2, 3, 4, 5);
            newInst = inst.map((element) => {
                return element * 2;
            });
        });

        it('Should return a new instance of a collection', () => {
            expect(newInst instanceof ReadonlyCollection).toBe(true)
            expect(newInst).not.toBe(inst);
        });

        it('Should not modify original collection', () => {
            expect(inst.toArray()).toEqual([1, 2, 3, 4, 5]);
        });

        it('Should return a collection of new values, created by callback', () => {
            expect(newInst.toArray()).toEqual([2, 4, 6, 8, 10]);
        });
    });
});