/**
 * Created by hari on 6/12/17.
 */
import React from "react";
import PropTypes from 'prop-types';

export const TodoForm = (props) => (
    <form>
        <input type="text"
               onChange={props.handleInputChange}
               value={props.currentTodo}/>
    </form>
);

TodoForm.PropTypes = {
    currentTodo: PropTypes.string
};