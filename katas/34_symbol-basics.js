// 34: symbol - basics
// A symbol is a unique and immutable data type and may be used as an identifier for object properties
// read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Symbol', function() {
  it('`Symbol` lives in the global scope', function(){
    const expected = Symbol;//const expected = someNamespace.Symbol;
    assert.equal(Symbol, expected);
  });
  it('every `Symbol()` is unique', function(){
    const sym1 = Symbol();
    const sym2 =  Symbol(); //const sym2 = sym1;
    assert.notEqual(sym1, sym2);
  });
  it('every `Symbol()` is unique, also with the same parameter', function(){
    var sym1 = Symbol('foo');
    var sym2 = Symbol('foo');//  var sym1 = Symbol('foo');
    assert.notEqual(sym1, sym2);
  });
  it('`typeof Symbol()` returns "symbol"', function(){
    const theType = typeof Symbol(); //const theType = typeof Symbol;
    assert.equal(theType, 'symbol');
  });
  it('`new Symbol()` throws an exception, to prevent creation of Symbol wrapper objects', function(){
    function fn() {
      new Symbol(); //  Symbol();
    }
    assert.throws(fn);
  });
});
