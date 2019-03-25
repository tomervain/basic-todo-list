import React, {Component} from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }
    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.submitHandler(this.state.text)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add new Todo Item</h3>
                <input name="text" onChange={this.handleChange}></input>
                <br />
                <button>Submit</button>
            </form>
        )
    }
}

export default TodoForm