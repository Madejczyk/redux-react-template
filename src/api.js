import { v4 } from 'node-uuid'

const fakeDatabase = {
	todos: [{
		id: v4(),
		text: 'hey',
		completed: true
	},{
		id: v4(),
		text: 'ho',
		completed: true
	},{
		id: v4(),
		text: 'hello',
		completed: false
	}
	]
}

const delay = (ms) =>
	new Promise (resolve => setTimeout(resolve, ms))

export const fetchTodos = (filter) => 
	delay(500).then(() => {
		switch (filter) {
		    case 'all':
		      return fakeDatabase.todos
		    case 'completed':
		      return fakeDatabase.todos.filter(t => t.completed)
		    case 'acttive':
		      return fakeDatabase.todos.filter(t => !t.completed)
		}
	})