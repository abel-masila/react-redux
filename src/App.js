import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUsers } from './actions/users.actions';

import { addNewTodo } from './actions/todos.actions';


class App extends Component {
  state={
    newTodo:''
  }
  componentDidMount(){
    this.props.getAllUsers();
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
  }

  render() {
    let todos= this.props.todos.map((todo,index)=> {
      return(
        <li key={index}> {todo}</li>
      )});
    let users=this.props.users.map((user, index)=>{
      return(
        <li key={index}>{user.name}</li>
      )
    })

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} >
          <input type="text" 
            value={this.state.newTodo} 
            onChange={ (event)=>this.setState({ newTodo: event.target.value })} />
            <button type="submit">submit</button>
        </form>
        <h2>All Todos</h2>
        <ul>
          {todos}
        </ul>
        <h2> All users </h2>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    todos: state.todos,
    users: state.users
  }
}
function mapDispatchToProps(dispatch){
  return {
    addNewTodo: bindActionCreators(addNewTodo, dispatch),
    getAllUsers:  bindActionCreators(getAllUsers, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
