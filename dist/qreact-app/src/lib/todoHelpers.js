"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by hari on 6/12/17.
 */

var addTodo = exports.addTodo = function addTodo(list, item) {
  return [].concat(_toConsumableArray(list), [item]);
};

var generateId = exports.generateId = function generateId() {
  return Math.floor(Math.random() * 100000);
};
//# sourceMappingURL=todoHelpers.js.map