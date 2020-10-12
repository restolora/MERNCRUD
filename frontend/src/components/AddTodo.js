import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        text: "",
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.AddTodo(this.state.text)
        this.setState({ text: '' })
    }

    onChange = e => {
        this.setState({ 
            text: e.target.value 
        })
    }
    render() {
        return (
            <div>
                <form style={{ display: 'flex'}} onSubmit={this.onSubmit}>
                    <input 
                        type="text" name="title" placeholder="Add new todo task.." 
                        onChange={this.onChange} 
                        style={{ flex: "10", padding: "5px" }} 
                        value={this.state.text}
                    />
                    <input className="btn" type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default AddTodo
