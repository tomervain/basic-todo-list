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
        const newText = this.state.text
        event.preventDefault()
        this.setState({text: ""})
        this.props.submitHandler(newText)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Add new Todo Item</h3>
                <input name="text" value={this.state.text} onChange={this.handleChange} required={true}></input>
                <br />
                <button>Submit</button>
            </form>
        )
    }
}

export default TodoForm