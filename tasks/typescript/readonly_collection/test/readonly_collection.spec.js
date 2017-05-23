"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var readonly_collection_1 = require("../readonly_collection");
describe('ReadonlyCollection', function () {
    it('Should check a dummy test', function () {
        chai_1.expect(true).to.equal(true);
    });
    describe('Creating collection', function () {
        it('Should return some value', function () {
            var inst = new readonly_collection_1.ReadonlyCollection();
            chai_1.expect(inst).to.be.ok;
            chai_1.expect(inst).to.be.an('object');
        });
        it('Should return an instance of a  class', function () {
            var inst = new readonly_collection_1.ReadonlyCollection();
            chai_1.expect(inst).to.be.instanceof(readonly_collection_1.ReadonlyCollection);
        });
        it('Should create a collection based on list of arguments', function () {
            var inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3);
            chai_1.expect(inst.get(0)).to.equal(1);
            chai_1.expect(inst.get(1)).to.equal(2);
            chai_1.expect(inst.get(2)).to.equal(3);
        });
        it('Should create collection with a different type', function () {
            var inst = new readonly_collection_1.ReadonlyCollection('a', 'b', 'c');
            chai_1.expect(inst.get(0)).to.equal('a');
            chai_1.expect(inst.get(1)).to.equal('b');
            chai_1.expect(inst.get(2)).to.equal('c');
        });
    });
    describe('toArray', function () {
        it('Should return an empty array', function () {
            var inst = new readonly_collection_1.ReadonlyCollection();
            chai_1.expect(inst.toArray()).to.deep.equal([]);
        });
        it('Should retun an instance of an Array class', function () {
            var inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3);
            chai_1.expect(inst.toArray()).to.be.instanceof(Array);
        });
        it('Should retun an array of elements', function () {
            var inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3);
            chai_1.expect(inst.toArray()).to.be.deep.equal([1, 2, 3]);
        });
        it('Collections with the same content should return the same array', function () {
            var inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3), inst2 = new readonly_collection_1.ReadonlyCollection(1, 2, 3);
            chai_1.expect(inst.toArray()).to.be.deep.equal(inst2.toArray());
        });
    });
    describe('Collection Length', function () {
        var inst;
        beforeEach(function () {
            inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3, 4);
        });
        it('Should return a length of a collection', function () {
            chai_1.expect(inst.length).to.equal(4);
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
            chai_1.expect(newInst).to.not.equal(inst);
        });
        it('Should not modify the original collection', function () {
            var newInst = inst.add(3);
            chai_1.expect(inst.toArray()).to.deep.equal([1, 2]);
        });
        it('Should append the element to the list', function () {
            var newInst = inst.add(3);
            chai_1.expect(newInst.get(2)).to.equal(3);
        });
        it('Should update collection length properly', function () {
            var newInst = inst.add(3);
            chai_1.expect(newInst.length).to.equal(3);
        });
        it('Should add three elements to the list', function () {
            var newInst = inst.add(3, 4, 5);
            chai_1.expect(newInst.toArray()).to.deep.equal([1, 2, 3, 4, 5]);
        });
    });
    describe('Removing elements', function () {
        var inst, newInst;
        beforeEach(function () {
            inst = new readonly_collection_1.ReadonlyCollection(1, 2, 3, 4, 5, 4);
            newInst = inst.remove(3, 4);
        });
        it('Should return a new instance of a collection', function () {
            chai_1.expect(newInst).to.be.instanceOf(readonly_collection_1.ReadonlyCollection);
            chai_1.expect(newInst).to.not.equal(inst);
        });
        it('Should not modify original collection', function () {
            chai_1.expect(inst.toArray()).to.be.deep.equal([1, 2, 3, 4, 5, 4]);
        });
        it('Should remove provided values from a new collection', function () {
            chai_1.expect(newInst.toArray()).to.be.deep.equal([1, 2, 5]);
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
            chai_1.expect(newInst).to.be.instanceOf(readonly_collection_1.ReadonlyCollection);
            chai_1.expect(newInst).to.not.be.equal(inst);
        });
        it('Should not modify original collection', function () {
            chai_1.expect(inst.toArray()).to.be.deep.equal([1, 2, 3, 4, 5]);
        });
        it('Should return a collection of new values, created by callback', function () {
            chai_1.expect(newInst.toArray()).to.be.deep.equal([2, 4, 6, 8, 10]);
        });
        // it('Should call a callback as many times as there are elements in the array', () => {
        // });
        // it('Should call callback with proper arguments', () => {
        // });
    });
});
