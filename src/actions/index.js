import {v4} from 'node-uuid'

export const receiveTodos = (filter, response) => ({
	type: 'RECEIVE_TODOS',
	filter,
	response
})

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: v4(),
  text
})

/*export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})*/

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})