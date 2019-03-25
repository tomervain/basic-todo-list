import React, {Component} from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoData from './todoData'

class App extends Component {
    constructor() {
        super()
        this.state = {
            id_count: 4,
            data: TodoData
        }
    }
    handleTodoClick = id => {
        this.setState(prevState => {
            const newData = prevState.data.map(item => {
                if(item.id === id) {
                    item.isComplete = !item.isComplete
                }
                return item
            })
            return {data: newData}
        })
    }
    handleNewTodo = text => {
        this.setState(prevState => {
            let newData = [...prevState.data]
            newData.push({
                id: prevState.id_count,
                text: text,
                isComplete: false
            })
            return {data: newData, id_count: prevState.id_count + 1}
        })
    }
    render() {
        return (
            <div>
                <h1>Todo-List App</h1><hr/>
                <TodoList data={this.state.data} clickHandler={this.handleTodoClick} />
                <TodoForm submitHandler={this.handleNewTodo}/>
            </div>
        )
    }
}

export default App