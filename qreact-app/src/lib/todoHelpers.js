/**
 * Created by hari on 6/12/17.
 */

export const addTodo = (list, item) => [...list, item];

export const generateId = () => Math.floor(Math.random()*100000);