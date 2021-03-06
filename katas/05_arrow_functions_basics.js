// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
  it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
    var func = '() => {}';// var func = function(){};
    assert.equal('' + func, '() => {}');
  });
  it('instead `{}` use an expression, as return value', function() {
    var func = () => {return 'I return too'}; // var func = () => {}
    assert.equal(func(), 'I return too');
  });
  it('one parameter can be written without parens', () => {
    var func = param => param - 1; //var func = p => param - 1;
    assert.equal(func(25), 24);
  });
  it('many params require parens', () => {
    var func = (param,param1) => param + param1; //var func = param => param + param1;
    assert.equal(func(23, 42), 23+42);
  });
  it('the function body needs parens to return an object', () => {
    var func = () => { return ({iAm: 'an object'})}; // var func = () => {iAm: 'an object'};
    assert.deepEqual(func(), {iAm: 'an object'});
  });
});
