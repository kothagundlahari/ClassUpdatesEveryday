'use strict';

var _todoHelpers = require('./todoHelpers');

test('addTodo should add the passed todo to the list', function () {
    var startTodos = [{ id: 1, name: 'one', isComplete: false }, { id: 2, name: 'two', isComplete: false }];
    var newTodo = { id: 3, name: 'three', isComplete: false };
    var expected = [{ id: 1, name: 'one', isComplete: false }, { id: 2, name: 'two', isComplete: false }, { id: 3, name: 'three', isComplete: false }];

    var result = (0, _todoHelpers.addTodo)(startTodos, newTodo);

    expect(result).toEqual(expected);
}); /**
     * Created by hari on 6/12/17.
     */


test('addTodo should not mutate the existing todo array', function () {
    var startTodos = [{ id: 1, name: 'one', isComplete: false }, { id: 2, name: 'two', isComplete: false }];
    var newTodo = { id: 3, name: 'three', isComplete: false };
    var expected = [{ id: 1, name: 'one', isComplete: false }, { id: 2, name: 'two', isComplete: false }, { id: 3, name: 'three', isComplete: false }];

    var result = (0, _todoHelpers.addTodo)(startTodos, newTodo);

    expect(result).not.toBe(startTodos);
});
//# sourceMappingURL=todoHelpers.test.js.map