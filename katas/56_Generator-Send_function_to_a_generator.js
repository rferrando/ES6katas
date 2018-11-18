// 56: Generator - Send function to a generator
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Pass a function to a generator', () => {
  it('the generator can receive a function as a value', function() {
    let fn = function() {};
    function* generatorFunction() {
      assert.equal(yield null, fn); // remember, don't touch this line
    }
    let iterator = generatorFunction();
    iterator.next() /*{ value: null, done: false }*/
    iterator.next(fn) //iterator.next() /*{ value: undefined, done: true }*/
  });
  it('pass a function to the iterator, which calls it', function() {
    function* generatorFunction() {
      yield (yield 1)();
    }
    var iterator = generatorFunction();
    var iteratedOver = [iterator.next().value, iterator.next(() => 2).value]; //var iteratedOver = [iterator.next().value, iterator.next().value];
    assert.deepEqual([1, 2], iteratedOver);
  });
  it('nesting yielded function calls', function() {
    function* generatorFunction() {
      yield (yield (yield 1)());
    }
    var iterator = generatorFunction(); /*añadido*/
    /* añadudo
    console.log(iterator.next().value)
    console.log(iterator.next(() => 2).value)
    console.log(iterator.next(3).value)*/
    var iteratedOver = [iterator.next().value, iterator.next(() => 2).value, iterator.next(3).value]; //  var iteratedOver = [];
    assert.deepEqual([1, 2, 3], iteratedOver);
  });
});
