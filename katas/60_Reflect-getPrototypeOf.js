// 60: Reflect - getPrototypeOf
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.getPrototypeOf` returns the prototype', function() {
  it('works like `Object.getPrototypeOf`', function() {
    const viaObject = Object.getPrototypeOf({});
    const viaReflect = Reflect.getPrototypeOf({}); //const viaReflect = Reflect.getPrototypeOf();
    assert.strictEqual(viaObject, viaReflect);
  });
  it('throws a TypeError for a non-object', function() {
    let fn = () => { Reflect.getPrototypeOf() }; //let fn = () => { Reflect.getPrototypeOf({}) };
    assert.throws(fn, TypeError);
  });
  it('a `new Set()` has a prototype', function() {
    const aSet = new Set(); //const aSet = Set;
    assert.equal(Reflect.getPrototypeOf(aSet), Set.prototype);
  });
  it('for a class, it is `Klass.prototype`', function() {
    class Klass {}
    const proto = Reflect.getPrototypeOf(new Klass()); //const proto = new Klass();
    assert.equal(proto, Klass.prototype);
  });
  it('works also for an old-style "class"', function() {
    function Klass() {}
    const proto = Reflect.getPrototypeOf(new Klass()); //const proto = Reflect.getPrototypeOf();
    assert.equal(proto, Klass.prototype);
  });
  it('an array has a prototype too', function() {
    let arr = [];
    const expectedProto = Array.prototype; //const expectedProto = Array;
    assert.equal(Reflect.getPrototypeOf(arr), expectedProto);
  });
});
