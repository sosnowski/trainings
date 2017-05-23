import 'mocha';
import { expect } from 'chai';
import { ReadonlyCollection } from '../readonly_collection';

describe('ReadonlyCollection', () => {
    it('Should check a dummy test', () => {
        expect(true).to.equal(true);
    })

    describe('Creating collection', () => {
        it('Should return some value', () => {
            let inst = new ReadonlyCollection<number>();
            expect(inst).to.be.ok
            expect(inst).to.be.an('object');
        });

        it('Should return an instance of a  class', () => {
            let inst = new ReadonlyCollection<number>();
            expect(inst).to.be.instanceof(ReadonlyCollection);
        });

        it('Should create a collection based on list of arguments', () => {
            let inst = new ReadonlyCollection<number>(1, 2, 3);
            expect(inst.get(0)).to.equal(1);
            expect(inst.get(1)).to.equal(2);
            expect(inst.get(2)).to.equal(3);
        });
        
        it('Should create collection with a different type', () => {
            let inst = new ReadonlyCollection<string>('a', 'b', 'c');
            expect(inst.get(0)).to.equal('a');
            expect(inst.get(1)).to.equal('b');
            expect(inst.get(2)).to.equal('c');
        });
    });

    describe('toArray', () => {
        it('Should return an empty array', () => {
            let inst = new ReadonlyCollection<number>();
            expect(inst.toArray()).to.deep.equal([]);
        });

        it('Should retun an instance of an Array class', () => {
            let inst = new ReadonlyCollection<number>(1, 2, 3);
            expect(inst.toArray()).to.be.instanceof(Array);
        });

        it('Should retun an array of elements', () => {
            let inst = new ReadonlyCollection<number>(1, 2, 3);
            expect(inst.toArray()).to.be.deep.equal([1, 2, 3]);
        });

        it('Collections with the same content should return the same array', () => {
            let inst = new ReadonlyCollection<number>(1, 2, 3),
                inst2 = new ReadonlyCollection<number>(1, 2, 3);
            expect(inst.toArray()).to.be.deep.equal(inst2.toArray());
        });
    });

    describe('Collection Length', () => {
        let inst: ReadonlyCollection<number>;
        beforeEach(() => {
            inst = new ReadonlyCollection<number>(1, 2, 3, 4);
        });

        it('Should return a length of a collection', () => {
            expect(inst.length).to.equal(4);
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
            expect(newInst).to.not.equal(inst);
        });

        it('Should not modify the original collection', () => {
            let newInst = inst.add(3);
            expect(inst.toArray()).to.deep.equal([1, 2]);
        });

        it('Should append the element to the list', () => {
            let newInst = inst.add(3);
            expect(newInst.get(2)).to.equal(3);
        });

        it('Should update collection length properly', () => {
            let newInst = inst.add(3);
            expect(newInst.length).to.equal(3);
        });

        it('Should add three elements to the list', () => {
            let newInst = inst.add(3, 4, 5);
            expect(newInst.toArray()).to.deep.equal([1, 2, 3, 4, 5]);
        });
    });

    describe('Removing elements', () => {
        let inst: ReadonlyCollection<number>, newInst: ReadonlyCollection<number>;
        beforeEach(() => {
            inst = new ReadonlyCollection<number>(1, 2, 3, 4, 5, 4);
            newInst = inst.remove(3, 4);
        });

        it('Should return a new instance of a collection', () => {
            expect(newInst).to.be.instanceOf(ReadonlyCollection);
            expect(newInst).to.not.equal(inst);
        });

        it('Should not modify original collection', () => {
            expect(inst.toArray()).to.be.deep.equal([1, 2, 3, 4, 5, 4]);
        });

        it('Should remove provided values from a new collection', () => {
            expect(newInst.toArray()).to.be.deep.equal([1, 2, 5]);
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
            expect(newInst).to.be.instanceOf(ReadonlyCollection);
            expect(newInst).to.not.be.equal(inst);
        });

        it('Should not modify original collection', () => {
            expect(inst.toArray()).to.be.deep.equal([1, 2, 3, 4, 5]);
        });

        it('Should return a collection of new values, created by callback', () => {
            expect(newInst.toArray()).to.be.deep.equal([2, 4, 6, 8, 10]);
        });

        // it('Should call a callback as many times as there are elements in the array', () => {

        // });

        // it('Should call callback with proper arguments', () => {

        // });
    });
});