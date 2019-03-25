import React from 'react'
import ListItem from './ListItem'

const TodoList = props => {
    const ListItems = props.data.map(item => 
        <ListItem key={item.id} data={item} onClick={props.clickHandler}/>)
    return (
        <div className="container">
            {ListItems}
        </div>
    )
}

export default TodoList