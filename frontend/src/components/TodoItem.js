import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyle = () => {
        return{
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "2px solid #ccc",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }
    render() {
        // deconstruct
        const { id, text } = this.props.todo

        return (
            <div style={this.getStyle()}>    
                <h3>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, id)} />
                    {text}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>Delete</button>
                </h3>
            </div>
        )
    }
}
// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const btnStyle = {
    background: 'crimson',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
