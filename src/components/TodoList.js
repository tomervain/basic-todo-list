import React from 'react'
import ListItem from './ListItem'

const TodoList = props => { 
    let ListItems = props.data.map(item => 
        <ListItem key={item.id} data={item} onClick={props.clickHandler} />
    )

    if(ListItems.length === 0) {
        ListItems = <h4>No items to display, please insert a new item...</h4>
    }
    return (
        <div className="container">
            {ListItems}
        </div>
    )
}

export default TodoList