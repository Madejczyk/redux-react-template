import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../actions'
import {getVisibleTodos} from '../reducers'
import TodoList from '../components/TodoList'
import {fetchTodos} from '../api'

class VisibleTodoList extends Component{
  componentDidMount(){
    this.fetchData()
  }

  componentDidUpdate(prevPros){
    if (this.props.filter !== prevPros.filter){
      this.fetchData()
    }
  }

  fetchData(){
    const {filter, receiveTodos} = this.props
    fetchTodos(filter).then(todos => 
        //console.log(this.props.filter, todos)
        receiveTodos(filter, todos)
    )
  }

  render(){
    const { toggleTodo, ...rest} = this.props
    return (
      <TodoList
       {...rest} 
       onTodoCLick={toggleTodo} 
       />
    )
  }

  const mapStateToProps = (state, {params}) => {
    const filter = params.filter || 'all'
    return {
        todos: getVisibleTodos(state, filter),
        filter,  
    }
  }

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList