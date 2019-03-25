import React from 'react'

const ListItem = props => {
    const isComplete = props.data.isComplete ? "todo-complete" : ""
    return (
        <div>
            <p className={"todo " + isComplete} onClick={() => props.onClick(props.data.id)}>{props.data.text}</p>
        </div>
    )
}

export default ListItem