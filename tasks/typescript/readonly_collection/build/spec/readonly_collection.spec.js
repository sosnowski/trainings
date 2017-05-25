"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var readonly_collection_1 = require("../readonly_collection");
describe('ReadonlyCollection', function () {
    it('Should check a dummy test', function () {
        expect(true).toBe(true);
    });
    describe('Creating collection', function () {
        it('Should return some value', function () {
            var inst = new readonly_collection_1.ReadonlyCollection();
            expect(inst).toBeDefined();
            expect(typeof inst).toBe('object');
        });
        it('Should return an instance of a  class', function () {
            var inst = new readonly_collection_1.ReadonlyCollection();
            expect(inst instanceof readonly_collection_1.ReadonlyCollection).toBe(true);
        });
        it('Should create a collection based on list of arguments', function () {
            var inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3);
            expect(inst.get(0)).toBe(1);
            expect(inst.get(1)).toBe(2);
            expect(inst.get(2)).toBe(3);
        });
        it('Should create collection with a different type', function () {
            var inst = new readonly_collection_1.ReadonlyCollection('a', 'b', 'c');
            expect(inst.get(0)).toBe('a');
            expect(inst.get(1)).toBe('b');
            expect(inst.get(2)).toBe('c');
        });
    });
    describe('toArray', function () {
        it('Should return an empty array', function () {
            var inst = new readonly_collection_1.ReadonlyCollection();
            expect(inst.toArray()).toEqual([]);
        });
        it('Should retun an instance of an Array class', function () {
            var inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3);
            expect(inst.toArray() instanceof Array).toBe(true);
        });
        it('Should retun an array of elements', function () {
            var inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3);
            expect(inst.toArray()).toEqual([1, 2, 3]);
        });
        it('Collections with the same content should return the same array', function () {
            var inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3), inst2 = new readonly_collection_1.ReadonlyCollection(1, 2, 3);
            expect(inst.toArray()).toEqual(inst2.toArray());
        });
    });
    describe('Collection Length', function () {
        var inst;
        beforeEach(function () {
            inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3, 4);
        });
        it('Should return a length of a collection', function () {
            expect(inst.length).toEqual(4);
        });
        // it('Should be a readonly property!', () => {
        //     inst.length = 66;
        //     expect(inst.length).to.equal(4);
        // });
    });
    describe('Adding elements', function () {
        var inst;
        beforeEach(function () {
            inst = new readonly_collection_1.ReadonlyCollection(1, 2);
        });
        it('Should return new collection', function () {
            var newInst = inst.add(3);
            expect(newInst).not.toBe(inst);
        });
        it('Should not modify the original collection', function () {
            var newInst = inst.add(3);
            expect(inst.toArray()).toEqual([1, 2]);
        });
        it('Should append the element to the list', function () {
            var newInst = inst.add(3);
            expect(newInst.get(2)).toBe(3);
        });
        it('Should update collection length properly', function () {
            var newInst = inst.add(3);
            expect(newInst.length).toBe(3);
        });
        it('Should add three elements to the list', function () {
            var newInst = inst.add(3, 4, 5);
            expect(newInst.toArray()).toEqual([1, 2, 3, 4, 5]);
        });
    });
    describe('Removing elements', function () {
        var inst, newInst;
        beforeEach(function () {
            inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3, 4, 5, 4);
            newInst = inst.remove(3, 4);
        });
        it('Should return a new instance of a collection', function () {
            expect(newInst instanceof readonly_collection_1.ReadonlyCollection).toBe(true);
            expect(newInst).not.toBe(inst);
        });
        it('Should not modify original collection', function () {
            expect(inst.toArray()).toEqual([1, 2, 3, 4, 5, 4]);
        });
        it('Should remove provided values from a new collection', function () {
            expect(newInst.toArray()).toEqual([1, 2, 5]);
        });
    });
    describe('Mapping elements', function () {
        var inst, newInst;
        beforeEach(function () {
            inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3, 4, 5);
            newInst = inst.map(function (element) {
                return element * 2;
            });
        });
        it('Should return a new instance of a collection', function () {
            expect(newInst instanceof readonly_collection_1.ReadonlyCollection).toBe(true);
            expect(newInst).not.toBe(inst);
        });
        it('Should not modify original collection', function () {
            expect(inst.toArray()).toEqual([1, 2, 3, 4, 5]);
        });
        it('Should return a collection of new values, created by callback', function () {
            expect(newInst.toArray()).toEqual([2, 4, 6, 8, 10]);
        });
    });
});
