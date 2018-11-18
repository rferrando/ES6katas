// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      const expectedType = 'object';
      assert.equal(typeof Reflect, expectedType); //const expectedType = 'not a function!';
    });
    it('it can not be instantiated (`new Reflect()`)', function() {
      const tryToConstruct = () => { new Reflect(); }; //const tryToConstruct = () => { Reflect; };
      assert.throws(tryToConstruct, TypeError);
    });
    it('has no `call` method (as opposed to e.g. Object)', function() {
      const expected = 'undefined'; //const expected = 'function';
      assert.equal(typeof Reflect.call, expected);
    });
  });

  describe('some `Reflect` usages', function() {
    it('`Reflect.construct()` is like `new ClassName`', function() {
      let Class = class {}; //let Class;
      assert.equal(Reflect.construct(Class, []) instanceof Class, true);
    });
    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 23}; //let obj = {x: 42};
      assert.equal(Reflect.get(obj, 'x'), 23);
    });
    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {x: 1};//let obj = {};
      assert.equal(Reflect.has(obj, 'x'), true);
    });
  });
});
