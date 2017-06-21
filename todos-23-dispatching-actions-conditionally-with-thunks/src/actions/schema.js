/**
 * Created by hari on 6/21/17.
 */
import { Schema, arrayOf } from 'normalizr';

export const todo = new Schema('todos');
export const arrayOfTodos = arrayOf(todo);
